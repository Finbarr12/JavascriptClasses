// Find the middle letter in a srting
//round 3.1456230 to 4 signifiant figures
// let word = "Ebuka";
// let wordL = word.length / 2;
// console.log(wordL);
// let midword = word.slice(wordL, wordL + 2);
// console.log(midword);

// Js Dates

const date = Date.now();
console.log(date);

const currentDate = new Date();
console.log(currentDate);

const getYear = new Date().getFullYear();
console.log(getYear);

const getMonth = new Date().getMonth();
console.log(getMonth);

const getSec = new Date().getSeconds();
console.log(getSec);

const setDate = new Date(2021, 2, 5);
console.log("Set date ", setDate);
