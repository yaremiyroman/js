// Given a triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

// odd_row(1)  ==  [1]
// odd_row(2)  ==  [3, 5]
// odd_row(3)  ==  [7, 9, 11]
// Note: your code should be optimized to handle big inputs.


// const oddRow = n => new Array(n).fill(null)
//     .reduce((row, item, i) =>
//         i > 0 ? [...row, row.at(-1) + 2] : row,
//         [1 + (n - 1) * 2 + (n - 1) * (n - 2) * 1]
//     );

const oddRow = n => Array.from(
    new Array(n).fill(n * n - n + 1),
    (item, i) => item + i * 2
);

const result = oddRow(4);
console.log('result > ', result);
