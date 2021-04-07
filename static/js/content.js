// RENDERS CONTENT ACOORDING TO PATHS
function render404() {
    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', 'errorPage');
    const error = document.createElement('h3');
    error.textContent = "Oops, page does not exist";
    const sadFace = document.createElement('h1');
    sadFace.innerHTML = "<span>&#9785;</span><br />404";

    const homeLink = document.createElement('a');
    homeLink.href = "#login"
    homeLink.text = "Login"

    errorDiv.appendChild(sadFace);
    errorDiv.appendChild(error);
    errorDiv.appendChild(homeLink);
    main.appendChild(errorDiv);
    //add error styling in css
}

function renderLoginForm() {
    console.log("RENDERING LOGIN FORM")
    const fields = [
        { tag: 'input', attributes: { type: 'text', id: 'username', name: 'username', placeholder: 'Enter a username' } },
        { tag: 'input', attributes: { type: 'password', id: 'password', name: 'password', placeholder: 'Enter a password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
 
    fields.forEach(f => {
        

        let field = document.createElement(f.tag);

       
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);    
            form.appendChild(field);
        })
    })

    form.setAttribute("id", "login")
    // form.addEventListener('submit', requestLogin)
    main.appendChild(form);

    const formSwitch = document.createElement('p');
    formSwitch.setAttribute("id", "regLogin")
    formSwitch.textContent = "Register";
    main.appendChild(formSwitch);

    document.getElementById('regLogin').addEventListener("click", changeForm);


    //TODO after submit click
    //call authenticate
    form.addEventListener('submit', authenticate);
    
    main.setAttribute('class', 'login')
}

function renderRegisterForm() {
    console.log("RENDERING REGISTER FORM")
    const fields = [
        { tag: 'input', attributes: { type: 'text', id: 'reg-username', name: 'username', placeholder: 'Enter a username' } },
        { tag: 'input', attributes: { type: 'email', id: 'email', name: 'email', placeholder: 'Enter an email' } },
        { tag: 'input', attributes: { type: 'password', id: 'reg-password', name: 'password', placeholder: 'Enter a password' } },
        { tag: 'input', attributes: { type: 'password', id: 'confirm-reg-password', name: 'confirm', placeholder: 'Confirm the password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Register' } }
    ]

    const form = document.createElement('form');

    fields.forEach(f => {
        
        let field = document.createElement(f.tag);

        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);    
            form.appendChild(field);
        })
    })

    form.setAttribute("id", "register")
    // form.addEventListener('submit', requestLogin)
    main.appendChild(form);

    const logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'logos');
    const logos = ["static/images/Facebook.png", "static/images/Instagram.png", "static/images/Google.png", "static/images/GitHub.png"]

    logos.forEach(url => {
        let logo = document.createElement('img');
        logo.setAttribute('src', url);
        logoDiv.appendChild(logo);
    })

    main.appendChild(logoDiv);

    const formSwitch = document.createElement('p');
    formSwitch.setAttribute("id", "regLogin")
    formSwitch.textContent = "Login";
    main.appendChild(formSwitch);

    document.getElementById('regLogin').addEventListener("click", changeForm);

    //TODO after submit click
    //call authenticate
    form.addEventListener('submit', authenticate);
    
    main.setAttribute('class', 'register')
}

function renderUserPage(){
    location.assign("./habitPage.html");
}