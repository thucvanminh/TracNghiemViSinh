const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Phục vụ các file tĩnh từ thư mục hiện tại
app.use(express.static(__dirname));

// Route chính để phục vụ file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'monGiDo269Cau.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
