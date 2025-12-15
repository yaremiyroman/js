const http = require('http'); // Імпортуємо модуль HTTP для створення сервера та обробки HTTP-запитів

const PORT = 7583;


// Створюємо сервер
const server = http.createServer((req, res) => {
    console.log('METHOD > ', req.method);
    console.log('URL > ', req.url);

    // Встановлюємо заголовок відповіді
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    if (req.url === '/') {
        res.end('Домашня сторінка');
    }

    if (req.url === '/about') {
        res.end('About сторінка');
    }

    if (req.url === '/contacts') {
        res.end('Контактів сторінка');
    }
});



// Запускаємо сервер
server.listen(PORT, () => {
    // Сервер слухає запити на порті 3000
    console.log(`Server is running on port ${PORT}`); // Виводимо повідомлення в консоль, що сервер запущено на порту 3000
});
