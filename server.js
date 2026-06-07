const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const configDir = path.join(__dirname, 'config');
const navigationFile = path.join(configDir, 'navigation.json');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/save', (req, res) => {
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
    console.log(`Server: http://localhost:${PORT}`);
});
