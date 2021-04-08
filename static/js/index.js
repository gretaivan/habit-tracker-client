const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#habits'];


window.addEventListener('hashchange', updateContent);
window.addEventListener('load', updateContent);


function updateContent(){
    const path = window.location.hash;
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

module.exports = {
    updateContent,
    updateMain
}