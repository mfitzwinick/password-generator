//Create arrays//
var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9"]
var specialChar = ['@','%','+',"\\",'/',"'",'!','#','$','^','?',':',',',')','(',
'}','{',']','[','~','-','_','.'];
//welcome employee//
alert ("Thank you for using Password Generator!")
//create variables for inputs with confirms and prompt//
var inputLower = confirm("Would you like lower case letters in your password?")
var inputUpper = confirm("Would you like upper case letters in your password?")
var inputSpecial = confirm("Would you like special letters in your password?")
var inputNumber = confirm("Would you like numbers in your password?")
var inputAmount = prompt ("How many characters would you like to include in your password (must be between 8 and 128")
var generateBtn = document.querySelector("#generate");
var allInputs = [];
var passwordText = [];
//check inputs//
console.log(inputLower)
console.log(inputUpper)
console.log(inputSpecial)
console.log(inputNumber)
console.log(inputAmount)

//create if statments//
if (inputLower ===true) {
  allInputs.push(lowercase)
};
if (inputUpper ===true) {
  allInputs.push(uppercase)
};
if (inputSpecial === true) {
  allInputs.push(specialChar)
};
if (inputNumber === true) {
  allInputs.push(numeric)
};
if (inputAmount < 8) {
  alert ("You much choose a number greater than 7");
  var inputAmount = prompt ("How many characters would you like to include in your password (must be between 8 and 128)?");
}; //NEED TO ADD A LOOP HERE//
if (inputAmount > 128) {
  alert ("You much choose a number less than 129");
  var inputAmount = prompt ("How many characters would you like to include in your password (must be between 8 and 128)?");
}; //NEED TO ADD A LOOP HERE//

//check final array//
console.log(allInputs)
//check prompt//
console.log(inputAmount)
// //-----------------------------------------------ARG!
var passwordBtn = document.querySelector("#generate");
  passwordBtn.addEventListener("click", 
    function generatePassword() {
      for (var i = 0; i < inputAmount; i++) {
      passwordText.push(allInputs[Math.floor(Math.random() * inputAmount.length) 
        return String.concat
      };
 //----------------------------------------------------------//
   // HOW DO I CIRCLE THE FOR LOOP INTO EACH CHAR?????//
//   return passwordText.toString() //usejoin
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// //-----------------------//

//#Pseudo Code//

//LEFT TO COMPLETE//
//20. For each loop generate a random character from the NEW ARRAY
//21. Concatinate a new string onto page in the correct 
