const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "SO") {
        alert("You are succesfully login");
        window.location.replace("/html/SO/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "OX") {
        alert("You are succesfully login");
        window.location.replace("/html/OX/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "MIA") {
        alert("You are succesfully login");
        window.location.replace("/html/MIA/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})