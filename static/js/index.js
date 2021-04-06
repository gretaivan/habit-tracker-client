const { changeForm } = require('./layout')

const publicRoutes = ['#', '#login', '#register'];

// window.addEventListener('hashchange', updateContent);
//private routes



document.getElementById('regLogin').addEventListener("click", changeForm);

