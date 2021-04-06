const { changeForm } = require('./layout')

const publicRoutes = ['#', '#login', '#register'];
//private routes


window.addEventListener('hashchange', updateContent);

function updateContent(){
    const path = window.location.hash;
    console.log("window path: " + path)
    if (privateRoutes.includes(path) && !currentUser()){
        window.location.hash = '#';
    } else {
        updateNav();
        updateMain(path);
    }
}

document.getElementById('regLogin').addEventListener("click", changeForm);

