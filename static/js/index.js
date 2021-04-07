
const publicRoutes = ['#', '#login', '#register', '#habits'];
const privateRoutes = [];


window.addEventListener('hashchange', updateContent);
window.addEventListener('load', updateContent);


function updateContent(){
    const path = window.location.hash;
    console.log("window path: " + path)

    //private path or not existing user
    if (privateRoutes.includes(path) && !currentUser()){
        window.location.hash = '#';
        alert("You need to register or login!")
    } else {
        updateMain(path);
    }
}

function updateMain(path) {
    main.innerHTML = '';
    if (path) {
        switch(path){
            case '':
                renderLoginForm(); break;
            case '#login':
                renderLoginForm(); break;
            case '#register':
                renderRegisterForm(); break;
            case '#habits':
                renderUserPage(); break;
            default:
                render404(); break;
        }
    } else {
        renderLoginForm();
    }
}



// document.getElementById('regLogin').addEventListener("click", changeForm);