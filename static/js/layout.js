const main = document.querySelector('main');
const modal = document.getElementById("modal");
const modalOpen = document.getElementById("newHabitButton");
const span = document.getElementsByClassName("close")[0];

function changeForm() {
    regForm = document.getElementById('register');
    loginForm = document.getElementById('login');
    logos = document.getElementById('logos');
    // main = document.querySelector('main');
    if (!regForm) {
        window.location.hash = '#register';
        // renderRegisterForm();
        // regForm.style.display = "block";
        // logos.style.display = "block";
        // loginForm.style.display = "none";
        // document.getElementById('regLogin').textContent = "Login";
        // main.style.height = "var(--registerHeight)";
        // main.style.top = "calc((100vh - var(--registerHeight)) / 2)";
    } else {
        window.location.hash = '#login';
        // regForm.style.display = "none";
        // logos.style.display = "none";
        // loginForm.style.display = "block";
        // document.getElementById('regLogin').textContent = "Register";
        // main.style.height = "var(--loginHeight)";
        // main.style.top = "calc((100vh - var(--loginHeight)) / 2)";
    }
}

modalOpen.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}