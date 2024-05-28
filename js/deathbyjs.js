//STEP 1

function sort(str) {
    const cleanStr = str.replace(/[^a-zA-Z]/g, '');
    return cleanStr.split('').sort().join('');
}

const exampleString = 'webmaster';
console.log(sort(exampleString));

//STEP 2

function capitalizeFirstLetter(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

const str = 'the quick brown fox';
console.log(capitalizeFirstLetter(str));


//STEP 3

function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

const vowelCount = countVowels('The quick brown fox');
console.log(vowelCount);

//STEP 4

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

const randomId = generateRandomId(8);
console.log(randomId); // Output: RCv1SBUC (example)

//STEP 5

function longestCountryName(countryNames) {
    return countryNames.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

const longestCountry = longestCountryName(["Australia", "Germany", "United States of America"]);
console.log(longestCountry); 
