
//Create arrays//
var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9"]
var specialChar = ['@','%','+',"\\",'/',"'",'!','#','$','^','?',':',',',')','(',
'}','{',']','[','~','-','_','.'];

//welcome employee//
alert ("Thank you for using Password Generator!\r\nPlease answer the following questions:")

//create a function with a recursive loop for prompt input//
var inputAmount = prompt ("How many characters would you like to include in your password (must be between 8 and 128")
inputCheck(inputAmount)
function inputCheck(amount) {
  if(amount >=8 && amount <=128) {
    return inputAmount = amount
  } else {
    alert("Your number must be between 8 and 128") 
    return inputCheck(amount = prompt("How many characters would you like to include in your password (must be between 8 and 128"))
  }
}

//create variables for confirms//
var inputLower = confirm("Would you like lower case letters in your password?")
var inputUpper = confirm("Would you like upper case letters in your password?")
var inputSpecial = confirm("Would you like special characters in your password?")
var inputNumber = confirm("Would you like numbers in your password?")

//create variables for button, empty array for selections and pw string//
var generateBtn = document.querySelector("#generate");
var allInputs = [];
var passwordText = "";

//check inputs//
console.log(inputLower)
console.log(inputUpper)
console.log(inputSpecial)
console.log(inputNumber)
console.log(inputAmount)

//create conditional statements for confirms and push to empty array//
if (inputLower ===true) {
  for (var i =0; i<lowercase.length; i++) {
    allInputs.push(lowercase[i])
  }
  };
if (inputUpper ===true) {
  for (var i =0; i<uppercase.length; i++) {
  allInputs.push(uppercase[i])};
  };
if (inputSpecial === true) {
  for (var i =0; i<specialChar.length; i++) {
  allInputs.push(specialChar[i])};
  };
if (inputNumber === true) {
  for (var i =0; i<numeric.length; i++) {
  allInputs.push(numeric[i])};
  };

//check final array//
console.log(allInputs)
//check prompt//
console.log(inputAmount)

//create function to randomly select characters in final array using a look and Math.random//
function generatePassword() {
for (var i = 0; i < inputAmount; i++) {
    passwordText += allInputs[Math.floor(Math.random() * inputAmount)] 
    };
    return passwordText;
      };

// // Write password to the #password input div //
function writePassword() {
var password = generatePassword();
var passwordFinal = document.querySelector("#password");
passwordFinal.value = password;
};
var passwordBtn = document.querySelector("#generate");
passwordBtn.addEventListener("click", writePassword);

