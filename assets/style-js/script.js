// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password based on user criteria
function generatePassword() {
  var length = prompt("Enter the password length (8-128 characters):");

  if (length === null) {
    return ""; // User canceled the prompt, return empty string
  }

  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select at least one character type.");
    return "";
  }

  var characterSet = "";

  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
    characterSet += "0123456789";
  }

  if (special) {
    characterSet += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}
