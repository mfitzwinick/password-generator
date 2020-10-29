
// Create and array for Upper Case
//Create and array for Lower Case
// Create and array for Numbers
// Create and array for Special Characters
// create a var for upper case input
// create a var for lower case input
// create a var for number input
// create a var for special char input
var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9"]
var specialChar = ['@','%',  '+',"\\",
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
alert ("Thank you for using Password Generator!")
var inputLower = confirm("Would you like lower case letters in your password?")
var inputUpper = confirm("Would you like upper case letters in your password?")
var inputSpecial = confirm("Would you like special letters in your password?")
var inputNumber = confirm("Would you like numbers in your password?")

// Assignment Code---DOES THIS CORRESPOND WITH THE BUTTON???
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//-----------------------//
//#Pseudo Code//
//1. Create a button to "Generate a new secure password"//
//2. Prompt the employee "Would you like to include Upper Case Letters?"(y/n)
//3. Prompt the employee "Would you like to include Lower Case Letters?" (y/n)
//4. Prompt the employee "Would you like to include Numbers?" (y/n)
//5. Prompt the employee "Would you like to include Special Characters?" (y/n)
//6. Create a prompt "How many characters would you like your password to be?/r 
//Must be between 8 and 128 characters" 

//15. create an if statment if upperCase() returns y/n (true/false)
//populate new array with selection
//16. create an if statment if upperCase() returns y/n(true/false)
//populate new array with selection
//17. create an if statment if upperCase() returns y/n (true/false)
//populate new array with selection
//18. create an if statment if upperCase() returns y/n (true/false)
//populate new array with selection
//19.  Create a for loop for the number of times there is a character choice
//20. For each loop generate a random character from the NEW ARRAY
//21. Concatinate a new string onto page in the correct div
