const fs = require('fs');
const path = require('path');

const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Deserunt', 'aliquam', 'officiis', 'expedita', 'quo', 'fugit', 'reiciendis', 'quisquam', 'doloribus', 'delectus', 'cumque', 'sequi', 'maxime', 'sapiente', 'aspernatur', 'nulla', 'fuga,', 'iure', 'saepe!', 'Provident,', 'debitis'
];

function getRandomLorem(maxWords) {
    const wordCount = Math.floor(Math.random() * maxWords) + 1;
    let result = [];

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * loremWords.length);
        result.push(loremWords[randomIndex]);
    }

    return result.join(' ');
}

function generateDB(filename, records = 10) {
    const items = [];
    const myFilePath = path.resolve(__dirname, filename);

    for (let i = 1; i <= records; i++) {
        items.push({
            id: i,
            title: getRandomLorem(5),
            body: getRandomLorem(25),
        });
    }

    const fileContent = JSON.stringify({ items });

    fs.writeFileSync(myFilePath, fileContent, 'utf-8');
}

generateDB('myDB.json', 20);
