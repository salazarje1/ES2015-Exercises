// 1. Quick Question #1
    // What does the following code return?

new Set([1,1,2,2,3,4]) // Set {1, 2, 3, 4}

// 2. Quick Question #2
    // What does the following code return?

[...new Set("referee")].join("") // "ref"

// 3. Quick Questions #3
    // What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // {[1,2,3]: true, [1,2,3]: false}

const hasDuplicate = (arr) => arr.length !== new Set(arr).size;

// 4. vowelCount
    // Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.


const vowelCount = (str) => {
    const vowelMap = new Map();
    const vowels = [...str].filter((letter) =>  'aeiou'.includes(letter));
    for(let letter of vowels) {
        if(vowelMap.has(letter)){
            vowelMap.set(letter, vowelMap.get(letter) + 1); 
        } else {
            vowelMap.set(letter, 1);
        };
    };
    return vowelMap; 
}
