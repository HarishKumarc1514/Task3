const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const forgotPasswordLink = document.querySelector("forgotPassword");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (passwordInput.value === "ZenTradesTest@123") {
      window.location.href = "dashboard.html";
    } else {
      console.log("Invalid password.");
      alert("Invalid password.");
    }
  });

  const validateUsername = (regex, message) => {
    usernameInput.addEventListener("blur", () => {
      if (!regex.test(usernameInput.value)) {
        console.log(message);
        alert(message);
      }
    });
  };

  const validatePassword = (regex, message) => {
    passwordInput.addEventListener("blur", () => {
      if (!regex.test(passwordInput.value)) {
        console.log(message);
        alert(message);
      }
    });
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  validateUsername(emailRegex, "Invalid username format.");

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
  validatePassword(passwordRegex, "Invalid password format.");
}

if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();

    //window.location.href = "mailto:support@zentrades.pro";
  });
}