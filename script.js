// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specialCharacters = "!#:$%'()=+,-./;{<>*~?@_&[\\]^`|}";
// let passwordChars =["abcdefghijklmnopqrstuvwxyz", "0123456789", "!#:$%'()=+,-./;{<>*~?@_&[\\]^`|}" ];
  let passwordCharacters = "";
  let password ="";
  if    (document.getElementById("lower-case").checked == false && 
        document.getElementById("upper-case").checked == false && 
        document.getElementById("special-characters").checked == false && 
        document.getElementById("special-characters").checked == false){
       
       alert("Please check one of the options!");
       return("Please check one of the options!");
  }
  if (document.getElementById("password-length").value >= 8 && document.getElementById("password-length").value <= 128){
     if (document.getElementById("lower-case").checked == true){
      passwordCharacters+= lowerCase;
     } 
    
    if (document.getElementById("upper-case").checked == true) {
      passwordCharacters+= lowerCase.toUpperCase();
      }
      if (document.getElementById("numeric").checked == true){
      passwordCharacters+= numbers;
      }
      if (document.getElementById("special-characters").checked == true){
      passwordCharacters+= specialCharacters;
      }

      for (i=0;  i < document.getElementById("password-length").value; i++ ){
        password += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
      }
      console.log(passwordCharacters);
      return password;
  } else {
    document.getElementById("password-length").style.backgroundColor = "red";
 alert("Not a valid entery. Please enter password length from 8-128 range");
 return("Not a valid entry!");
  }
}
document.getElementById("password-length").addEventListener("keydown",function() {
  document.getElementById("password-length").style.backgroundColor = "white";
});
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




