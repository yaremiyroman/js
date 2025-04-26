// Lottery machine

// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

const lottery = str => /\d/.test(str)
    ? [...new Set(str.split('').filter(char => Number.isInteger(+char)))].join('')
    : 'One more run!';
