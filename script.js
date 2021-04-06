// Assignment Code
var generateBtn = document.querySelector("#generate");


  if (document.getElementById("upper-case").checked == true) {
    console.log("true");
  } else 
  console.log("false");




function generate() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";






}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




