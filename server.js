import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import geoip from 'geoip-lite';
import UAParser from 'ua-parser-js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import job from './cron.js';
const app = express();

// Port to run the server
job.start(); // Start the cron job
app.use((req, res, next) => {
    const parser = new UAParser(req.headers['user-agent']);
    const userAgentInfo = parser.getResult();
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const geo = geoip.lookup(ip);

    const visitorInfo = {
        timestamp: new Date().toISOString(),
        ip: ip,
        location: geo ? {
            country: geo.country,
            region: geo.region,
            city: geo.city,
            timezone: geo.timezone,
            ll: geo.ll
        } : 'Unknown',
        thietBi: {
            loaiThietBi: userAgentInfo.device.type || 'unknown',
            hangSanXuat: userAgentInfo.device.vendor || 'unknown',
            model: userAgentInfo.device.model || 'unknown',
            heDieuHanh: `${userAgentInfo.os.name || 'unknown'} ${userAgentInfo.os.version || ''}`,
            trinhDuyet: `${userAgentInfo.browser.name || 'unknown'} ${userAgentInfo.browser.version || ''}`,
        },
        ngonNgu: req.headers['accept-language'] || 'unknown',
        manHinh: req.headers['sec-ch-ua-platform'] || 'unknown',
        path: req.path,
        referer: req.headers.referer || 'Direct'
    };

    fs.appendFile(
        path.join(__dirname, 'visitors.log'),
        JSON.stringify(visitorInfo) + '\n',
        (err) => {
            if (err) console.error('Error logging visitor:', err);
        }
    );

    next();
});

const PORT = 5001;

// Kiểm tra file tồn tại
console.log('Checking files:');
console.log('monGiDo269Cau.html exists:', fs.existsSync(path.join(__dirname, 'monGiDo269Cau.html')));
console.log('duocLy.html exists:', fs.existsSync(path.join(__dirname, 'duocLy.html')));

app.get('/', (req, res) => {
    console.log('Vi sinh route accessed');
    const filePath = path.join(__dirname, 'monGiDo269Cau.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.log('Error serving root file:', err);
            res.status(500).send('Error loading page');
        }
    });
});

app.get('/hoa-sinh', (req, res) => {
    console.log('Hoa Sinh route accessed');
    const filePath = path.join(__dirname, 'hoaSinh.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.log('Error serving root file:', err);
            res.status(500).send('Error loading page');
        }
    });
});

app.get('/duoc-ly', (req, res) => {
    console.log('Duoc-ly route accessed');
    const filePath = path.join(__dirname, 'duocLy.html');
    console.log('Trying to serve:', filePath);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.log('Error serving duoc-ly file:', err);
            res.status(500).send('Error loading duoc-ly page');
        } else {
            console.log('duocLy.html served successfully');
        }
    });
});

app.get('/admin/secret', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// API endpoint for stats
app.get('/api/stats', (req, res) => {
    fs.readFile(path.join(__dirname, 'visitors.log'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading stats' });
            return;
        }

        const visits = data.trim().split('\n').map(line => JSON.parse(line));

        const stats = {
            tongLuotTruyCap: visits.length,
            soIPDuyNhat: new Set(visits.map(v => v.ip)).size,
            danhSachTruyCap: visits.map(visit => ({
                thoiGian: new Date(visit.timestamp).toLocaleString('vi-VN'),
                ip: visit.ip,
                viTri: visit.location,
                thietBi: visit.thietBi,
                trangTruyCap: visit.path
            })),
            thongKeDuongDan: {}
        };

        visits.forEach(visit => {
            stats.thongKeDuongDan[visit.path] =
                (stats.thongKeDuongDan[visit.path] || 0) + 1;
        });

        res.json(stats);
    });
});


// Serve static files
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
