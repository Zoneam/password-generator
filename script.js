// Assignment Code
var generateBtn = document.querySelector("#generate");
var myPassword = document.getElementById("password");
function generatePassword() {
  //charset declaration 
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specialCharacters = "!#:$%'()=+,-./;{<>*~?@_&[\\]^`|}";
  //resetting password characters 
  let passwordCharacters = "";
  let password ="";
  //checking if none of the checkboxes are checked
  if    (document.getElementById("lower-case").checked == false && 
        document.getElementById("upper-case").checked == false && 
        document.getElementById("special-characters").checked == false && 
        document.getElementById("numeric").checked == false){
       //if none of the checkboxes are checked show alert message
       alert("Please check one of the options!");
       return("Please check one of the options!");
  }
  //checking if entered lenght of password meets required range 8-128 
  if (document.getElementById("password-length").value >= 8 && document.getElementById("password-length").value <= 128){
    //checking and adding character strings to our passwordCharacters holder
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
      //randomly selectring characters from our character set and adding to our password 
      for (i=0;  i < document.getElementById("password-length").value; i++ ){
        password += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
      }
      //returning our password
      return password;
  } else {
    //if not in required range alert 
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

//coping password 
document.querySelector("#password").addEventListener("click", function(){
  if (myPassword.value != "Not a valid entry!" && myPassword.value != "Please check one of the options!" && myPassword.value != ""){
  myPassword.select();
  document.execCommand("copy");
  alert("Password Copied");
  }
})



