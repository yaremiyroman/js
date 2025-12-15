// const dns = require('dns');
// const os = require('os');

// console.log(os.networkInterfaces());
// 192.168.0.234

// Розв'язування доменного імені google.com
// dns.resolve4('localhost', (err, addresses) => {
//     if (err) {
//         console.error('Помилка розв\\\'язання доменного імені:', err);
//         return;
//     }
//     console.log(`IP-адреси для google.com: ${addresses.join(', ')}`);
// });

// // Зворотній пошук для IP-адреси
// const ip = '192.168.0.234';
// dns.reverse(ip, (err, hostnames) => {
//     if (err) {
//         console.error('Помилка зворотного пошуку:', err);
//         return;
//     }
//     console.log(`Доменні імена для IP-адреси ${ip}: ${hostnames.join(', ')}`);
// });