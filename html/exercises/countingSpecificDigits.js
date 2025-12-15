// Method For Counting Total Occurence Of Specific Digits
// We need a method in the List Class that may count specific digits from a given list of integers. This marked digits will be given in a second list. The method .count_spec_digits()/.countSpecDigits() will accept two arguments, a list of an uncertain amount of integers integers_lists/integersLists (and of an uncertain amount of digits, too) and a second list, digits_list/digitsList that has the specific digits to count which length cannot be be longer than 10 (It's obvious, we've got ten digits). The method will output a list of tuples, each tuple having two elements, the first one will be a digit to count, and second one, its corresponding total frequency in all the integers of the first list. This list of tuples should be ordered with the same order that the digits have in digitsList

// const l = new List();

// let integersList = [1, 1, 2, 3, 1, 2, 3, 4];
// let digitsList = [1, 3];
// l.countSpecDigits(integersList, digitsList); // [[1, 3], [3, 2]]

// integersList = [-18, -31, 81, -19, 111, -888];
// digitsList = [1, 8, 4];
// l.countSpecDigits(integersList, digitsList); // [[1, 7], [8, 5], [4, 0]]

// integersList = [-77, -65, 56, -79, 6666, 222];
// digitsList = [1, 8, 4];
// l.countSpecDigits(integersList, digitsList); // [[1, 0], [8, 0], [4, 0]]

// integersList = [-77, -65, 56, -79, 6666, 222];
// digitsList = [];
// l.countSpecDigits(integersList, digitsList); // []

// integersList = [];
// digitsList = [1, 8, 4];
// l.countSpecDigits(integersList, digitsList); // [[1, 0], [8, 0], [4, 0]]



function List() {
    this.countSpecDigitsWithArray = (integersList, digitsList) => {
        return Object.entries(
            integersList
                .map(Math.abs)
                .join('')
                .split('')
                .map(x => parseInt(x))
                .filter(int => digitsList.includes(int))
                .reduce(
                    (tuples, int) => ({ ...tuples, [int]: ++tuples[int] }),
                    digitsList.reduce((counts, key) => ({ ...counts, [key]: 0 }), {})
                )
        ).map(([key, value]) => [parseInt(key), value]);
    }

    this.countSpecDigits = (integersList, digitsList) => {
        const counters = new Map();

        digitsList.forEach(value => counters.set(
            value,
            integersList.flatMap(int => `${Math.abs(int)}`.split('').map(int => parseInt(int)))
                .filter(int => int === value).length
        ));

        return [...counters.entries()];
    }
}

const list = new List();

// integersList = [1, 1, 2, 3, 1, 2, 3, 4];
const integersList = [-18, -31, 81, -19, 111, -888];
const digitsList = [1, 8, 5];

const result = list.countSpecDigits(integersList, digitsList);
console.log('result >', result);
