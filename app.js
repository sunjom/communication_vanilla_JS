const express = require('express');
const path = require('path');
const app = express();
const port = 3000

// 정적 파일 제공 (CSS, JS, 이미지 등)
app.use(express.static(__dirname))

// 메인 페이지
app.get('/', (req, res) => {
    const fileName = path.join(__dirname, 'main.html');
    res.sendFile(fileName);
});

app.get('/login', (req, res) => {
    const fileName = path.join(__dirname, 'login/login.html');
    res.sendFile(fileName);
});

app.get('/signUp', (req, res) => {
    const fileName = path.join(__dirname, 'signUp/emailCheck.html');
    res.sendFile(fileName);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})