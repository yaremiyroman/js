// The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

// For example:

// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call
// Different loopers should not affect each other, so be wary of unmanaged global state.




// const makeLooper = str => {
//     let current = 0;

//     return () => str[current++];
// }

// const loop = makeLooper('012');
// console.log(loop());
// console.log(loop());
// console.log(loop());

// const abc = makeLooper("abc");

// console.log(abc(), "a");
// console.log(abc(), "b");
// console.log(abc(), "c");






const makeLooper = str => {
    const data = {
        str: str,
    };

    return data[Symbol.iterator] = function () {
        let index = 0;
        // console.log('str > ', str);
        // console.log('this.str > ', this.str);

        return {
            next: () => {
                return {
                    value: this.str[index++],
                    done: index > this.str.length,
                }
            },
        };
    }

};

const groups = makeLooper('qwer');
console.log('groups > ', groups);
// for (let group of groups) {
    // console.log(groups[group]);
// }




// const abc = makeLooper("abc");

// console.log(abc(), "c");
// console.log(abc(), "c");
// console.log(abc(), "c");
