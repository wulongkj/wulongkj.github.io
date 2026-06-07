const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const session = require('express-session');

const app = express();
const PORT = 3001;
const configDir = path.join(__dirname, 'config');
const navigationFile = path.join(configDir, 'navigation.json');
const configFile = path.join(configDir, 'config.json');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(session({
    secret: crypto.randomBytes(32).toString('hex'),
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

function loadConfig() {
    if (fs.existsSync(configFile)) {
        return JSON.parse(fs.readFileSync(configFile, 'utf-8'));
    }
    const defaultConfig = {
        password: hashPassword('admin123'),
        whitelist: ['127.0.0.1', '::1']
    };
    saveConfig(defaultConfig);
    return defaultConfig;
}

function saveConfig(config) {
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
    }
    fs.writeFileSync(configFile, JSON.stringify(config, null, 2), 'utf-8');
}

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

function checkAuth(req, res, next) {
    if (!req.session || !req.session.loggedIn) {
        return res.status(401).json({ success: false, error: '未授权访问' });
    }
    next();
}

app.get('/api/auth/check', (req, res) => {
    res.json({ success: !!(req.session && req.session.loggedIn) });
});

app.post('/api/auth/login', (req, res) => {
    try {
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ success: false, error: '请输入密码' });
        }
        const config = loadConfig();
        if (hashPassword(password) === config.password) {
            req.session.loggedIn = true;
            res.json({ success: true, message: '登录成功' });
        } else {
            res.status(401).json({ success: false, error: '密码错误' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/auth/logout', (req, res) => {
    req.session.loggedIn = false;
    res.json({ success: true });
});

app.get('/api/auth/ip', (req, res) => {
    res.json({ ip: req.ip || req.connection.remoteAddress || '' });
});

app.get('/api/auth/whitelist', checkAuth, (req, res) => {
    res.json({ success: true, ips: loadConfig().whitelist });
});

app.post('/api/auth/whitelist', checkAuth, (req, res) => {
    try {
        const { ip } = req.body;
        if (!ip) return res.status(400).json({ success: false, error: '请输入 IP' });
        const config = loadConfig();
        if (config.whitelist.includes(ip)) {
            return res.status(400).json({ success: false, error: 'IP 已存在' });
        }
        config.whitelist.push(ip);
        saveConfig(config);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/api/auth/whitelist', checkAuth, (req, res) => {
    try {
        const { ip } = req.body;
        if (!ip) return res.status(400).json({ success: false, error: '请输入 IP' });
        const config = loadConfig();
        const index = config.whitelist.indexOf(ip);
        if (index === -1) {
            return res.status(404).json({ success: false, error: 'IP 不存在' });
        }
        config.whitelist.splice(index, 1);
        saveConfig(config);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/auth/password', checkAuth, (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ success: false, error: '请输入密码' });
        }
        const config = loadConfig();
        if (hashPassword(currentPassword) !== config.password) {
            return res.status(401).json({ success: false, error: '当前密码错误' });
        }
        if (newPassword.length < 6) {
            return res.status(400).json({ success: false, error: '密码至少 6 位' });
        }
        config.password = hashPassword(newPassword);
        saveConfig(config);
        res.json({ success: true, message: '密码已修改' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/save', checkAuth, (req, res) => {
    try {
        const data = req.body;
        if (!Array.isArray(data)) {
            return res.status(400).json({ success: false, error: '数据格式错误' });
        }
        fs.writeFileSync(navigationFile, JSON.stringify(data, null, 2), 'utf-8');
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    const config = loadConfig();
    const isDefault = config.password === hashPassword('admin123');
    console.log(`Server: http://localhost:${PORT}`);
    if (isDefault) {
        console.log(`默认密码：admin123（请及时修改）`);
    }
});
