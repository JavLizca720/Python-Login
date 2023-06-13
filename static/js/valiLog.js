const formLogin = document.querySelector('#form-login');


formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameValid = validateUsername();
    const passwordValid = validatePassword();
    if (usernameValid && passwordValid) {

      formLogin.submit(); 
    }
  }); 

 
validationUsername.style.display = "none";
lenghtUsername.style.display = "none";
validationPassword.style.display = "none";
lenghtPassword.style.display = "none";

const validateUsername = () => {
    if (!username.value.trim()) {
      validationUsername.style.display = "block";
      username.style.border = "1px solid red";
      return false;
    }

    else {
        validationUsername.style.display = "none"; 
        username.style.border = "1px solid initial";
    }

    if(username.value.length < 8){ 
    lenghtUsername.style.display = "block";
    username.style.border = "1px solid red";
    return false;
    }

    if(username.value.length >= 8){ 
    lenghtUsername.style.display = "none";
    username.style.border = "1px solid green";
    return true;
    }

    validationUsername.style.display = "none";
    username.style.border = "1px solid green";
    return true;
  };

  const validatePassword = () => {
    if (!password.value.trim()) {
      validationPassword.style.display = "block";
      password.style.border = "1px solid red";
      return false;
    }

    else {
        validationPassword.style.display = "none"; 
        password.style.border = "1px solid initial";
    }

    if(password.value.length < 8){ 
    lenghtPassword.style.display = "block";
    password.style.border = "1px solid red";
    return false;
    }

    if(password.value.length >= 8){ 
    lenghtPassword.style.display = "none";
    password.style.border = "1px solid green";
    return true;
    }

    validationPassword.style.display = "none";
    password.style.border = "1px solid green";
    return true;
  };