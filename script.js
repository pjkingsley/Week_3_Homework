// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = [];

var passwordOptions = [];

var passwordLength = 0;

var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
"w", "x", "y", "z"];

var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
"W", "X", "Y", "Z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", 
"_", "`", "{", "|", "}", "~"];


// Write password to the #password input
var  writePassword = function () {
  var lengthOfPass = prompt ("How long would you like your password? (Choose a number between 8 and 123");
  if (lengthOfPass > 7 && lengthOfPass < 124){
    console.log(lengthOfPass);
    passwordLength = lengthOfPass;
  } else if (lengthOfPass === "") {
    alert ("Your password must be between 8 and 123 characters.");
    return;
  } else {
    return;
  }

  var lC = confirm ("would you like to use lower case letters?");
  if (lC === true) {
    console.log (lC);
    passwordOptions.push.apply(passwordOptions, lowerC);
    console.log (passwordOptions);
  }

  var uC = confirm ("HOW ABOUT UPPERCASE LETTERS?");
  if (uC === true) {
    console.log (uC);
    passwordOptions.push.apply(passwordOptions, upperC);
    console.log (passwordOptions);
  }

  var num = confirm ("Shall we use numbers?");
  if (num === true) {
    console.log (num);
    passwordOptions.push.apply(passwordOptions, number);
    console.log (passwordOptions);
  }

  var sC = confirm ("Would you like to include Special Characters? (exp: $, #, *)");
  if (sC === true) {
    console.log (sC);
    passwordOptions.push.apply(passwordOptions, specialCharacters);
    console.log (passwordOptions);
  }
  for (i = 0; i < lengthOfPass; i++) {
    let passCharacter = passwordOptions.splice(Math.floor(Math.random()*passwordOptions.length),1)[0];
    console.log (passCharacter);
    password.push(passCharacter);
    console.log (password);
    var display = password.join('');
    console.log (display);
  }
  var showPass = document.getElementById('password');
  showPass.innerHTML = display;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
