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
var passwordText; 
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
//check final array//
console.log(allInputs)
//check prompt//
console.log(inputAmount)

//console.log(allInputs[Math.floor(Math.random() * allInputs.length)])
function generatePassword() {
  var passwordText; 
  for (var i = 0; i < inputAmount; i++) {
   //var randomSelection = Math.floor(Math.random() * allInputs.length)
   passwordText.push(allInputs[Math.floor(Math.random() * allInputs.length[0])
  }
  return passwordText.toString() //usejoin
}



// Assignment Code---DOES THIS CORRESPOND WITH THE BUTTON???


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
//
//20. For each loop generate a random character from the NEW ARRAY
//21. Concatinate a new string onto page in the correct div
