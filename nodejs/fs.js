// FS
// CRUD
const fs = require('fs');
const path = require('path');

// console.log(__dirname);

// Create a file
// fs.writeFileSync(path.resolve(__dirname, 'example.txt'), 'Hello, World!');
// console.log('*** FILE CREATED ***');

// const data = fs.readFileSync(path.resolve(__dirname, 'example.txt'), 'utf-8');
// const data = fs.readFileSync(path.resolve(__dirname, 'example.txt'), 'utf-8');

// console.log('*** FILE CONTENT ***');
// console.log(data);

// fs.appendFileSync(path.resolve(__dirname, 'example.txt'), '\nSOME NEW CONTENTTNTNTNTNTNT');

// fs.unlinkSync(path.resolve(__dirname, 'example.txt'));
// fs.unlinkSync(path.resolve(__dirname, 'big_file'));
// console.log('␡␡␡ FILE DELETED ␡␡␡');



// const filePath = path.resolve(__dirname, 'example.txt');

// fs.writeFile(filePath, 'Hello, World!', (err) => {
//     console.log('File created');
// });

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     console.log('File has been read > \n');
//     console.log(data);
// });

// fs.appendFile(filePath, 'Appended Content!', () => {
//     console.log('File has been updated');
// });

// fs.unlink(filePath, () => {
//     console.log('File has been DELETED');
// });



// fs.writeFileSync
// fs.writeFile
// fs.promises.writeFile
// fs.writeFile -> async await // HOMEWORK


// fs.promises.writeFile(filePath, 'Hello, World!').then(() => {
//     console.log('File created');
// });

// fs.promises.readFile(filePath, 'utf-8').then((data) => {
//     console.log('File has been read > \n');
//     console.log(data);
// });



const myFilePath = path.resolve(__dirname, 'example.txt');

// console.log('__dirname > ', __dirname);

// fs.writeFile(filePath, 'Hello, World!', (err) => {
//     console.log('File created');
// });

// async function createFile(filePath, content) {
//     try {
//         await fs.promises.writeFile(filePath, content);

//         console.log('File created');
//     } catch (err) {
//         console.error('Error creating file:', err);
//     }
// }

// createFile(myFilePath, 'MY CONTGENTTTT').then(() => {
//     console.log('DONE');
// });


