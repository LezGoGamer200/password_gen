let password_letters = "abcdefghijklmnopqrstuvwxyz";
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+{};~?,.?:[]<>|`-_+=";
function generatePass() {
  let length = parseInt(document.getElementById("length").value);
  let num_char = 26;
  let uppercase_c = document.getElementById("uppercase").checked;
  let numbers_c = document.getElementById("numbers").checked;
  let symbols_c = document.getElementById("symbols").checked;
  console.log(uppercase_c + numbers_c + symbols_c);
  console.log(uppercase_c + numbers_c + symbols_c);
  console.log(uppercase_c);
  let password = "";
  let charSet = "";
  charSet += password_letters;
  if (uppercase_c === true) {
    charSet += uppercase_letters;
    num_char += 26;
  }
  if (numbers_c === true) {
    charSet += numbers;
    num_char += 10;
  }
  if (symbols_c === true) {
    charSet += symbols;
    num_char += 31;
  }
  let i = 0;
  while (i < length) {
    i += 1;
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  let possible_combinations = Math.pow(num_char, length);
  document.getElementById("possible_combos").innerHTML =
    possible_combinations.toString();
  document.getElementById("password").value = password;
}
generate_button = document.getElementById("generate");
generate_button.addEventListener("click", generatePass);
