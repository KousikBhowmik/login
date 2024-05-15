const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputpassword");
const alert = document.querySelector(".alert");
const height = document.querySelector(".container");

const loginBtn = document.querySelector(".log");

const message = [];
let flag = 0;

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailPattern.test(email);
  return isValid;
}

function isPasswordValid(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return false;
  }
  return true;
}

function loginFunOne() {
  const loginEmail = inputEmail.value;
  if (isValidEmail(loginEmail)) {
  } else {
    message.push("Enter a valid email");
    flag++;
  }

  const loginPassword = inputPassword.value;
  if (isPasswordValid(loginPassword)) {
  } else {
    message.push(" Enter a strong password");
    flag++;
  }
  if (flag > 0) {
    alert.innerHTML = message;
    height.style.minHeight = "530px";
    flag = 0;
    message.length = 0;
  }

  inputEmail.value = "";
  inputPassword.value = "";
}

loginBtn.addEventListener("click", loginFunOne);
