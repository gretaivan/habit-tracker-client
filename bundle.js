(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { changeForm } = require('./layout')

const publicRoutes = ['#', '#login', '#register'];

// window.addEventListener('hashchange', updateContent);
//private routes



document.getElementById('regLogin').addEventListener("click", changeForm);


},{"./layout":2}],2:[function(require,module,exports){

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
},{}]},{},[1]);
