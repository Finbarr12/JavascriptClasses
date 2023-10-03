// 1. Write JavaScript code that takes a string as input and uses string methods to count the number of characters in the string, excluding spaces. Then, display the character count.
// For example, if the input is "Hello, World!", the code should display "12" (since there are 12 non-space characters in the string).

//Method 1
// let word = "how are you doing today?";
// let wordBefore = word.length;
// let wordReplace = word.replace(/\s/g, "");
// let wordafter = wordReplace.length;
// // console.log(word);
// console.log(wordBefore);
// console.log(wordReplace);
// console.log(wordafter);

//Method2

// let text = "Hell no";
// console.log(text);
// let textBeforeLength = text.length;
// console.log(textBeforeLength);
// let replacedText = text.replaceAll(" ", "");
// console.log(replacedText);
// let replacedTextLength = replacedText.length;
// console.log(replacedTextLength);

// //2. Write JavaScript code that takes a string and replaces all occurrences of a specified substring with another specified string, using string methods. Then, display the modified string.
// // For example, if the input string is "Hello, World! Hello, Universe!" and you want to replace "Hello" with "Hi", the code should display "Hi, World! Hi, Universe!".
// let Best_mc = "Eminem and no one else";
// console.log(Best_mc);
// let Wack_mc = Best_mc.replace("no one else", "Slim Shady");
// console.log(Wack_mc);

//Question 1: Create an array named words with elements 'Hello' and 'World', and then join them into a single string separated by a space.

let words = ["Hello", "World"];
console.log(words.join(" "));

// Question 2: Given an array named data with elements 'apple', 'banana', and 'cherry', remove the last element and return a string with the remaining elements separated by a hyphen.

const data = ["apple", "banana", "cherry"];
data.pop();
const hyphenSeparated = data.join("-");
console.group(hyphenSeparated);

// Question 3: Add 'grape' to the end of an array named fruits containing 'apple', 'banana', and 'cherry', and then convert the array to a string with elements separated by commas.
let fruit = ["apple", "banana", "cherry"];
let Nefruit = fruit.push("grapes");
console.log(fruit.toString());

// Question 4: Remove the first element from an array named colors containing 'red', 'green', and 'blue', and then convert the array to a string in lowercase.

let colors = ["RED", "GREEN", "BLUE"];
colors.shift();
let results = colors.join().toLowerCase();
console.log(results);

// Question 5: Add 'David' to the beginning of an array named people containing 'Alice', 'Bob', and 'Charlie', and then return a string with elements enclosed in parentheses.

const names = ["Anna"];

//Question 6: Create an array named sentences with elements 'This is', 'a challenging', 'question'. Remove the second element, concatenate the remaining elements into a single string, and convert it to lowercase.

let sentence = ["This is", "a challenging", "question"];
// let newSentence = sentence.splice(1, 1);
// let aNewsentence = newSentence.toString();
// console.log(sentence.join(" "));
