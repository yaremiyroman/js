// Change two-dimensional array
// Function receive a two-dimensional square array of random integers.
// On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).
// You can mutate the input if you want, but it is a better practice to not mutate the input

const inputMatrix = [
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 0, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6]
];

const outputMatrix = [
    [0, 4, -5, -9, 3],
    [6, 0, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 0, -9],
    [-3, 2, 1, -5, 1]
];

// function matrix(array) {
//     console.log('array >', array);

//     const updatedArray = [...array];
//     const n = array.length;

//     for (let i = 0; i < n; i++) {
//         updatedArray[i][i] = updatedArray[i][i] < 0 ? 0 : 1;
//     }

//     return updatedArray;
// }



const matrix = arr => arr.reduce((updatedArray, element, i) => {
    updatedArray[i][i] = +(!(arr[i][i] < 0));
    return updatedArray;
}, [...arr]);

const result = matrix(inputMatrix);
console.log('result > ', result);