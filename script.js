// Assignment Code
var generateBtn = document.querySelector("#generate");


  // if (document.getElementById("upper-case").checked == true) {
  //   console.log("true");
  // } else 
  // console.log("false");

function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordCharacters = lowerCase;
  let password ="";

if (document.getElementById("upper-case").checked == true) {
  passwordCharacters+= upperCase;
}
 if (document.getElementById("numeric").checked == true){
  passwordCharacters+= numbers;
}

if (document.getElementById("special-characters").checked == true){
  passwordCharacters+= specialCharacters;
}



  for (i=0;  i<24; i++ ){
    password += passwordCharacters.charAt(Math.floor(Math.random()*passwordCharacters.length));
  }

  console.log(password);
  return password;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




