/* write functions that define the action for each event */
function validate() {
  var sid = document.getElementById("sid").value;
  var pwd1 = document.getElementById("pwd1").value;
  var pwd2 = document.getElementById("pwd2").value;
  var uname = document.getElementById("uname").value;
  
  var errMsg = ""; // stores the error message
  var result = true; // assumes no errors
  var pattern = /^[a-zA-Z ]+$/; // only letters and spaces

  // Rule 1: check if required inputs have values
  if (sid === "") {
    errMsg += "User ID is required.\n";
  }
  if (pwd1 === "") {
    errMsg += "Password is required.\n";
  }
  if (pwd2 === "") {
    errMsg += "Retype Password is required.\n";
  }
  if (uname === "") {
    errMsg += "Name is required.\n";
  }

  // Rule 2: check if the user ID contains an @ symbol
  if (sid.indexOf("@") === -1) {
    errMsg += "User ID must contain an '@' symbol.\n";
  }

  // Rule 3: check if password and retype password are the same
  if (pwd1 !== pwd2) {
    errMsg += "Passwords are not match.\n";
  }

  // Optional Rule 1: password at least 8 characters
  if (pwd1.length < 8) {
    errMsg += "Password: must be at least 8 characters long.\n";
  }

  // Optional Rule 2: password must have upper and lower case
  if (!(/[a-z]/.test(pwd1) && /[A-Z]/.test(pwd1))) {
    errMsg += "Password: must contain both uppercase and lowercase letters.\n";
  }

  // Rule 4: check if user name contains only letters and spaces
  if (!uname.match(pattern)) {
    errMsg += "Name must contain only letters and spaces.\n";
  }

  // Show error message if any
  if (errMsg !== "") {
    alert(errMsg);
    result = false;
  }

  return result;
}

/* link HTML elements to corresponding event function */
function init () {
  var regForm = document.getElementById("regform");
  regForm.onsubmit = validate;
}

/* execute the initialisation function once the window loads */
window.onload = init;
