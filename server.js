const express = require('express');
const path = require('path');
const app = express();

// Use environment port or fallback to 3000
// const PORT = "https://tracnghiemvisinh.onrender.com";
const PORT = 5001;


// Serve static files from current directory
app.use(express.static(__dirname));

// Main route to serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'monGiDo269Cau.html'));
});
app.get('/duoc-ly', (req,res) => {
    res.sendFile(path.join(__dirname, 'duocLy.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
