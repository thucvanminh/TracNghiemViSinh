import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import job from './cron.js';
const app = express();
// Port to run the server
job.start(); // Start the cron job
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

// Serve static files
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
