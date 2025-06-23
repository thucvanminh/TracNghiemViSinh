const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 5001;

// Kiểm tra file tồn tại
console.log('Checking files:');
console.log('monGiDo269Cau.html exists:', fs.existsSync(path.join(__dirname, 'monGiDo269Cau.html')));
console.log('duocLy.html exists:', fs.existsSync(path.join(__dirname, 'duocLy.html')));

app.get('/', (req, res) => {
    console.log('Root route accessed');
    const filePath = path.join(__dirname, 'monGiDo269Cau.html');
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
