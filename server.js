import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import geoip from 'geoip-lite';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import job from './cron.js';
const app = express();

// Port to run the server
job.start(); // Start the cron job
app.use((req, res, next) => {
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
            ll: geo.ll // latitude and longitude
        } : 'Unknown',
        userAgent: req.headers['user-agent'],
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

// Add this new route to your server
app.get('/admin/stats', (req, res) => {
    fs.readFile(path.join(__dirname, 'visitors.log'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading stats');
            return;
        }

        const visits = data.trim().split('\n').map(line => JSON.parse(line));
        const stats = {
            totalVisits: visits.length,
            uniqueIPs: new Set(visits.map(v => v.ip)).size,
            pathCounts: {},
            browsers: {}
        };

        visits.forEach(visit => {
            stats.pathCounts[visit.path] = (stats.pathCounts[visit.path] || 0) + 1;
            stats.browsers[visit.userAgent] = (stats.browsers[visit.userAgent] || 0) + 1;
        });

        res.json(stats);
    });
});

// Serve static files
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
