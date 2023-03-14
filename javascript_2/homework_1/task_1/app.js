const checkPasswordBtn = document.getElementById("check-password-btn");
checkPasswordBtn.addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const repeatPasswordInput = document.getElementById("password-repeat");

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert("Passwords do not match");
    return;
  }

  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number");
    return;
  }

  
  alert("Passwords match and meet requirements");
});

const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

passwordToggle.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.classList.remove("fa-eye");
    passwordToggle.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passwordToggle.classList.remove("fa-eye-slash");
    passwordToggle.classList.add("fa-eye");
  }
});

const passwordRepeatInput = document.getElementById("password-repeat");
const passwordRepeatToggle = document.getElementById("password-repeat-toggle");

passwordRepeatToggle.addEventListener("click", () => {
  if (passwordRepeatInput.type === "password") {
    passwordRepeatInput.type = "text";
    passwordRepeatToggle.classList.remove("fa-eye");
    passwordRepeatToggle.classList.add("fa-eye-slash");
  } else {
    passwordRepeatInput.type = "password";
    passwordRepeatToggle.classList.remove("fa-eye-slash");
    passwordRepeatToggle.classList.add("fa-eye");
  }
});





