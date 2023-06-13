//Create a login form which takes a username , password and submit button.
//Check if the username is an alphabet and more than 2 characters
//on each instance provide an error message as feedback to the user
//check if the password is atleast 8 characters
//Make sure submit button doesn't refresh the page
//All evaluations must be done if an only if submit button is cllicked




function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   console.log(username)
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

   

    var isValid = true;

    // Validate username
    if (!/^[A-Za-z]{3,}$/.test(username)) {
      usernameError.textContent = "Username should be at least 3 alphabetical characters";
      isValid = false;
    }

// Validate password
if (password.length < 8) {
    passwordError.innerText = "Password should be at least 8 characters";
    isValid = false;
}
  return isValid;
}
