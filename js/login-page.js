const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "assignment1") {
        alert("You are succesfully login");
        window.location.replace("/html/SO/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "assignment2") {
        alert("You are succesfully login");
        window.location.replace("/html/MIA/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "assignment3") {
        alert("You are succesfully login");
        window.location.replace("/html/SA/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})