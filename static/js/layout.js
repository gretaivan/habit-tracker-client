function changeForm() {
    regForm = document.getElementById('register');

    if (!regForm) {
        window.location.hash = '#register';
    } else {
        window.location.hash = '#login';
    }
}
