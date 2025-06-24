// Your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!




// 1
// const extractVowels = str => str.match(/[aeiou]/gi) ?? [];

// const inputString = 'Enter string to reverse vowels';
// console.log('inputString > ', inputString);
// const vowels = extractVowels(inputString);

// const outputString = inputString.split('')
//     .reduce((reversed, char) => reversed += !!extractVowels(char).length ? vowels.pop() : char, '');

// console.log('outputString > ', outputString);




// 2
function reverseVowels(str) {
    const extractVowels = str => str.match(/[aeiou]/gi) ?? [];
    const vowels = extractVowels(str);

    return str.split('')
        .reduce((reversed, char) => reversed += !!extractVowels(char).length
            ? vowels.pop() : char, '');
}


const reversed = reverseVowels('aye');
console.log('reversed > ', reversed);
