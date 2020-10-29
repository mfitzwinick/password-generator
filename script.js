// Assignment Code
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
//6. Create a range "Your password will be between 8 and 128 characters?" (y/n)
//7. Create and array for Upper Case
//8. Create and array for Lower Case
//9. Create and array for Numbers
//10. Create and array for Special Characters
//11. create a var for upper case input
//12. create a var for lower case input
//13. create a var for number input
//14. create a var for special char input
//15. create an if statment if upperCase() returns y/n
//16. create an if statment if upperCase() returns y/n
//17. create an if statment if upperCase() returns y/n
//18. create an if statment if upperCase() returns y/n
//19.  Create a for loop for the number of times there is a character choice
//20. For each loop generate a random character  --HOW??????
