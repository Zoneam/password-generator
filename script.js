// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordCharacters = lowerCase;
  let password ="";



  if (document.getElementById("password-lenght").value>=8 && document.getElementById("password-lenght").value<=128){
      if (document.getElementById("upper-case").checked == true) {
      passwordCharacters+= passwordCharacters.toUpperCase();
      }
      if (document.getElementById("numeric").checked == true){
      passwordCharacters+= numbers;
      }
      if (document.getElementById("special-characters").checked == true){
      passwordCharacters+= specialCharacters;
      }

      for (i=0;  i<document.getElementById("password-lenght").value; i++ ){
        password += passwordCharacters.charAt(Math.floor(Math.random()*passwordCharacters.length));
      }

      console.log(passwordCharacters);
      return password;
  } else {
 alert("Not a valid entery. Please enter password lenght from 8-128 range");
 return("Not a valid entry!");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




