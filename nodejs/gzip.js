const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const input = fs.createReadStream('./text.txt.gz');
const output = fs.createWriteStream('./text.txt');

input.pipe(zlib.createGunzip()).pipe(output);
