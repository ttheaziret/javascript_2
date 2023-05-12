const checkPasswordBtn = document.getElementById("check-password-btn");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

checkPasswordBtn.addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const repeatPasswordInput = document.getElementById("password-repeat");
  const emailInput = document.getElementById("email");

  if (passwordInput.value !== repeatPasswordInput.value) {
    errorMessage.innerHTML = "Passwords do not match";
    successMessage.innerHTML = "";
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    errorMessage.innerHTML = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number";
    successMessage.innerHTML = "";
    return;
  }

  const emailRegex = /^[a-zA-Z]{2,8}@[a-zA-Z]{2,}\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.innerHTML = "Email must be in the format of 'example@domain.com'";
    successMessage.innerHTML = "";
    return;
  }

  successMessage.innerHTML = "Passwords match and meet requirements, and email is in the correct format";
  errorMessage.innerHTML = "";
});
