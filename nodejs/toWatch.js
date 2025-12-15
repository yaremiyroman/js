const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server running on 6578');
});


// Запускаємо сервер
server.listen(6578, () => {
    // Сервер слухає запити на порті 3000
    console.log(`Server is running on port 6578`);
});

