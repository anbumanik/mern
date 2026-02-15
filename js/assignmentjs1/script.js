const form = document.getElementById("updatePasswordForm");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

const newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
const confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");

// Arrow Function (ES6)
const validateNewPassword = () => {
  if (newPassword.value.trim() === "") {
    newPasswordErrMsg.textContent = "Required*";
    return false;
  } else {
    newPasswordErrMsg.textContent = "";
    return true;
  }
};

const validateConfirmPassword = () => {
  if (confirmPassword.value.trim() === "") {
    confirmPasswordErrMsg.textContent = "Required*";
    return false;
  } else {
    confirmPasswordErrMsg.textContent = "";
    return true;
  }
};

newPassword.addEventListener("blur", validateNewPassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNewPasswordValid = validateNewPassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isNewPasswordValid && isConfirmPasswordValid) {
    alert("Password Updated Successfully!");
  }
});
