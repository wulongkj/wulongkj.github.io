const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;
const configDir = path.join(__dirname, 'config');
const navigationFile = path.join(configDir, 'navigation.json');
const adminConfigFile = path.join(configDir, 'admin.json');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(__dirname));

function getAdminPassword() {
    try {
        if (fs.existsSync(adminConfigFile)) {
            const config = JSON.parse(fs.readFileSync(adminConfigFile, 'utf-8'));
            return config.password || 'admin123';
        }
    } catch (e) {
        console.error('读取 admin config 失败:', e.message);
    }
    return 'admin123';
}

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    const expectedPassword = getAdminPassword();
    if (!token || token !== expectedPassword) {
        return res.status(401).json({ success: false, error: '未授权访问' });
    }
    next();
}

app.post('/api/save', authMiddleware, (req, res) => {
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

app.post('/api/login', (req, res) => {
    const { password } = req.body;
    const expectedPassword = getAdminPassword();
    if (password === expectedPassword) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, error: '密码错误' });
    }
});

app.post('/api/change-password', authMiddleware, (req, res) => {
    try {
        const { newPassword } = req.body;
        if (!newPassword || typeof newPassword !== 'string') {
            return res.status(400).json({ success: false, error: '密码格式错误' });
        }
        fs.writeFileSync(adminConfigFile, JSON.stringify({ password: newPassword }, null, 2), 'utf-8');
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server: http://localhost:${PORT}`);
});
