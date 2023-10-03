// Js Keywords

// let const = "man"
// let else = 3
// let if = null
// let break = "hello"
// let function = "hello"
// let default = "hello"
// let return = "hello"
// let do = "hello"

// String Methods

//toLowerCase
// let firstName = "Favour"

// console.log(firstName.toLowerCase());

//toUpperCase
// let class_Name = "p rospe r"
// console.log(class_Name.toUpperCase())

//length
// console.log(class_Name.length)

//indexOf
// console.log(class_Name.indexOf("k"));

//charAt
// let newName = "nonso"

// console.log(newName.charAt(5))

// let pass = "password"
// console.log(pass.toUpperCase().charAt(0));

//lastIndexOf
let secondName = "Daniella";
// console.log(secondName.lastIndexOf("p"))

//charCodeAt

// console.log(secondName.charCodeAt("i"))

// //slice

// let recordName = "Freedom Park"

// // console.log(recordName.slice(8,12));

// // Assignment correction

// // Replace ---Neche

// let randonWord = 'New Palace New King'
// let replacedWord = randonWord.replace("New","Old")
// let replacedAllWord = randonWord.replaceAll("New","Old")

// console.log(randonWord, "", replacedWord, `\n`, replacedAllWord)

// // substring

// let str = "Hello world"

// let resultSubstr = str.substring(0, 4)

// console.log(resultSubstr);

// // concat

// let firstWord = "Evil"
// let secondWord = " Friend "

// let concatedWord = firstWord.concat(" ",secondWord)

// console.log(concatedWord);

// // trim

// let Trimmed = secondWord.trim()
// console.log(secondWord);
// console.log(Trimmed);

// //repeat

// let man = "Evil Man Johnnie "

// let result = man.repeat(10)

// console.log(result);

// //startWith

// let word = "Egg roll"

// let start = word.startsWith("g",2)

// console.log(start);

// //Math Method / Number Methods

// let number = 99
// console.log(number);
// let numberResult = number.toString()
// console.log(numberResult);

//Math Method
// const maths = Math.sqrt(4);
// console.log(maths);

// let results = Math.cos(180);
// console.log(results);

// let anodaNumber = Math.pow(4, 3);
// console.log(anodaNumber);

// let newWords = Math.max(10, 16, 9);
// console.log("New words", newWords);

// let newWords2 = Math.min(10, 16, 9);
// console.log("New words2", newWords2);

// let newNumber = Math.floor(Math.random() * 100);
// let ceilNumber = Math.ceil(Math.random() * 100);
// let roundNumber = Math.round(Math.random() * 100);
// let abs = Math.abs(-3);
// console.log("abs", abs);
// console.log(newNumber, ceilNumber);

// //Array Methods

// let name = ["Man", 23, true, [2, false]];
// let arr = Array("Nile", 3, true, ["Gold", null]);

// console.log(name);
// console.log(arr);

// console.log(name[3][0]);
// console.log(name[3][2][1]);

//Array Methods

// ()=>{} ---callback fn

// const names = "Bad Man,Good man,Yellow boy";

// const resultName = names.split("");

// console.log(resultName);

//push
const newArr = ["Finbarr", 34, true];
const arrResult = newArr.push("Money");
console.log("New length", arrResult);
console.log(newArr);

//pop
const arrayPop = [1, 2, 3, 4, 5];
const popArray = arrayPop.pop();
console.log("ArrayPopped", popArray);
console.log(arrayPop);

//unshift

let unshiftArr = [1, 3, 5, 7];
let unshiftResult = unshiftArr.unshift(0);
console.log(unshiftResult);
console.log(unshiftArr);

//shift

let shiftArr = [4, 6, 8];
let shiftArrResult = shiftArr.shift();
console.log(shiftArrResult);
console.log(shiftArr);

//reverse

let names = [1, 2, 3, 4, 5, 6, 7];
let reversedArr = names.reverse();
console.log(reversedArr);

let varia = "man";
console.log(varia + " woman");
console.log(`${varia} woman`);

// '' - single quote
// "" - double quote
// `` - bakticks
