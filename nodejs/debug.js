import winston from 'winston';

// Створюємо і налаштовуємо логер
const logger = winston.createLogger({
    level: 'info', // Встановлюємо базовий рівень логування
    format: winston.format.json(), // Формат логів - JSON
    transports: [
        new winston.transports.Console(), // Виводимо логи в консоль
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Зберігаємо помилки у файл
        new winston.transports.File({ filename: 'combined.log' }) // Зберігаємо всі логи у файл
    ]
});

// Використовуємо логер
logger.info('Це інформаційне повідомлення');
logger.error('Це повідомлення про помилку');
