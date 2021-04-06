(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#habits'];


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
            // case '#register':
            //     renderRegisterForm(); break;
            // case '#habits':
            //     renderFeed(); break;
            default:
                render404(); break;
        }
    } else {
        renderLoginForm();
    }
}



// document.getElementById('regLogin').addEventListener("click", changeForm);
},{}]},{},[1]);
