// 1. Write JavaScript code that takes a string as input and uses string methods to count the number of characters in the string, excluding spaces. Then, display the character count.
// For example, if the input is "Hello, World!", the code should display "12" (since there are 12 non-space characters in the string).

//Method 1
let word = "how are you doing today?";
let wordBefore = word.length;
let wordReplace = word.replace(/\s/g, "");
let wordafter = wordReplace.length;
// console.log(word);
// console.log(wordBefore);
// console.log(wordReplace);
// console.log(wordafter);

//Method2

let text = "Hell no";
console.log(text);
let textBeforeLength = text.length;
console.log(textBeforeLength);
let replacedText = text.replaceAll(" ", "");
console.log(replacedText);
let replacedTextLength = replacedText.length;
console.log(replacedTextLength);

//2. Write JavaScript code that takes a string and replaces all occurrences of a specified substring with another specified string, using string methods. Then, display the modified string.
// For example, if the input string is "Hello, World! Hello, Universe!" and you want to replace "Hello" with "Hi", the code should display "Hi, World! Hi, Universe!".
let Best_mc = "Eminem and no one else";
console.log(Best_mc);
let Wack_mc = Best_mc.replace("no one else", "Slim Shady");
console.log(Wack_mc);
