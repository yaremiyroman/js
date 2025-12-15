const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 7583;

function sendFile(res, filePath, replacements = {}) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Internal Server Error');
            return;
        }

        let content = data;

        for (const key in replacements) {
            const realValue = replacements[key];

            content = content.replaceAll(`{{${key}}}`, realValue);
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
    });
};


const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            sendFile(res, path.resolve(__dirname, 'html', 'index.html'));
        }

        if (req.url === '/about') {
            sendFile(res, path.resolve(__dirname, 'html', 'about.html'));
        }

        if (req.url === '/form') {
            sendFile(res, path.resolve(__dirname, 'html', 'form.html'));
        }
    }

    if (req.method === 'POST') {
        if (req.url === '/submit') {
            let body = '';

            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                const postData = new URLSearchParams(body);

                const name = postData.get('name');
                const email = postData.get('email');

                sendFile(res, path.resolve(__dirname, 'html', 'confirm.html'), {
                    username: name,
                    email: email,
                });
            });
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
