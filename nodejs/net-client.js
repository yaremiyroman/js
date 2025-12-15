const net = require('net');
const fs = require('fs');
const path = require('path');

const client = new net.Socket();
const filePath = path.join(__dirname, 'text.txt'); // Replace with your file path

console.log('filePath > ', filePath);


client.connect(5608, '127.0.0.1', () => {
    console.log('Підключено до сервера');

    const readStream = fs.createReadStream(filePath, { highWaterMark: 8096 });

    readStream.on('data', (chunk) => {
        client.write(chunk);
    });

    readStream.on('end', () => {
        console.log('Файл повністю надіслано');
        client.end();
    });

    readStream.on('error', (err) => {
        console.error('Помилка читання файлу:', err);
        client.end();
    });
});

client.on('close', () => {
    console.log('З\'єднання закрито');
});

client.on('error', (err) => {
    console.error('Помилка клієнта:', err);
});
