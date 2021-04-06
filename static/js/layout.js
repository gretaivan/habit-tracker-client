
function changeForm() {
    regForm = document.getElementById('register');
    loginForm = document.getElementById('login');
    logos = document.getElementById('logos');
    main = document.querySelector('main');
    if (regForm.style.display === "none") {
        regForm.style.display = "block";
        logos.style.display = "block";
        loginForm.style.display = "none";
        document.getElementById('regLogin').textContent = "Login";
        main.style.height = "var(--registerHeight)";
        main.style.top = "calc((100vh - var(--registerHeight)) / 2)";
    } else {
        regForm.style.display = "none";
        logos.style.display = "none";
        loginForm.style.display = "block";
        document.getElementById('regLogin').textContent = "Register";
        main.style.height = "var(--loginHeight)";
        main.style.top = "calc((100vh - var(--loginHeight)) / 2)";
    }
}


exports.modules = { changeForm }