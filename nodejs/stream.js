const fs = require('fs');

const readStream = fs.createReadStream('text.txt', 'utf-8');




readStream.on('data', chunk => {
    console.log('chunk => ', chunk.length);
});

readStream.on('end', chunk => {
    console.log(' data RECEIVED > ');
});

