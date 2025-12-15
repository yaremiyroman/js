const crypto = require('crypto');

// Генерація хешу для паролю з сіллю
// const password = 'superSecret123';  // input password => submit // REGISTRATION


// // 'superSecret123' => hash(pswd) => 'abcedsfg12345689' (hex)
// // 'superSecret123' => hash(pswd) => 'abcedsfg12345689' (hex)

// // 'superSecret123' + 'saltrandom123' => hash(pswd) + hash(salt) => 'abcedsfg12345689kjabsndgasd89fgasd89gf' (hex)


// //  abcedsfg12345689kjabsndgasd89fgasd89gf =>  db   + salt => db
// // abc + salt1    abc + salt2 =>





// const salt = crypto.randomBytes(16).toString('hex');


// const cryptedPswd = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

// // console.log('salt > ', salt);
// // console.log('cryptedPswd > ', cryptedPswd);



// // Перевірка хешу
// const inputPassword = 'superSecret123'; // LOGIN


// const inputHash = crypto.pbkdf2Sync(inputPassword, salt, 10000, 64, 'sha512').toString('hex');

// console.log('cryptedPswd > ', cryptedPswd);
// console.log('inputHash > ', inputHash);

// if (cryptedPswd === inputHash) {
//     console.log('Пароль вірний.');
// } else {
//     console.log('Пароль невірний.');
// }


// Hello, world





// user => pswd, name, email, phone, age

// key settings
const password = 'myPSWD234!@#';
const salt = crypto.randomBytes(16).toString('hex');
const key = crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha256');

// crypto settings
const iv = crypto.randomBytes(16);
const algorithm = 'aes-256-cbc';
const myData = 'Hello My Data Wrld';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let cryptedData = cipher.update(myData, 'utf8', 'hex');
cryptedData += cipher.final('hex');
console.log('cryptedData > ', cryptedData);


const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decryptedData = decipher.update(cryptedData, 'hex', 'utf8');
console.log('decryptedData > ', decryptedData);
