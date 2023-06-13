const form = document.querySelector('#form-reg');

const validationName =document.getElementById('validationName');
const lenghtName =document.getElementById('lenghtName');
const validationUsername =document.getElementById('validationUsername');
const lenghtUsername =document.getElementById('lenghtUsername');
const lenghtPassword =document.getElementById('lenghtPassword');
const validationPassword =document.getElementById('validationPassword');
const validationRepeatPassword =document.getElementById('validationRepeatPassword');

const name =document.getElementById('name');
const username =document.getElementById('username');
const password =document.getElementById('password');
const repeatPassword =document.getElementById('repeat-password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nameValid = validateName();
    const usernameValid = validateUsername();
    const passwordValid = validatePassword();
    const repeatPasswordValid = validateRepeatPassword();
  
    
    if (usernameValid && passwordValid && nameValid && repeatPasswordValid) {
    //if (nameValid && usernameValid && passwordValid) { 
      form.submit(); 
    }
  });


validationName.style.display = "none";
lenghtName.style.display = "none";
validationUsername.style.display = "none";
lenghtUsername.style.display = "none";
//validationUsernameLength.style.display = "none";
lenghtPassword.style.display = "none";
validationPassword.style.display = "none";
validationRepeatPassword.style.display = "none";

const validateName = () => {
    if (!name.value.trim()) {
      validationName.style.display = "block";
      name.style.border = "1px solid red";
      return false;
    }
    else {
        validationName.style.display = "none"; 
        name.style.border = "1px solid initial";
    }
  
    validationName.style.display = "none";
    name.style.border = "1px solid green";
    return true;

    if(name.value.length < 8){ 
        lenghtName.style.display = "block";
        name.style.border = "1px solid red";
        return false;
    }

    if(name.value.length >= 8){ 
        lenghtName.style.display = "none";
        name.style.border = "1px solid green";
        return true;
    }

    validationName.style.display = "none";
    name.style.border = "1px solid green";
    return true;

  };


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

    if (password.value.trim() !== repeatPassword.value.trim()) {
        validationPassword.style.display = "none";
        password.style.border = "1px solid red";
        validationRepeatPassword.style.display = "block"; // Mostrar mensaje de validación
        repeatPassword.style.border = "1px solid red";
        return false;
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
    validationRepeatPassword.style.display = "none"; // Ocultar mensaje de validación
    repeatPassword.style.border = "1px solid green";
    return true;
};

const validateRepeatPassword = () => {
    if (!repeatPassword.value.trim()) {
        validationRepeatPassword.style.display = "block";
        repeatPassword.style.border = "1px solid red";
        return false;
    }

    if (password.value.trim() !== repeatPassword.value.trim()) {
        validationRepeatPassword.style.display = "block";
        repeatPassword.style.border = "1px solid red";
        return false;
    }

    validationRepeatPassword.style.display = "none";
    repeatPassword.style.border = "1px solid green";
    return true;
};