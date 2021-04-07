// RENDERS CONTENT ACOORDING TO PATHS
function render404() {
    const errorDiv = document.createElement('div');
    const error = document.createElement('h3');
    error.textContent = "Oops, page does not exist";

    const homeLink = document.createElement('a');
    homeLink.href = "#login"
    homeLink.text = "Login"

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
}

function renderRegisterForm() {
    console.log("RENDERING REGISTER FORM")
    const fields = [
        { tag: 'input', attributes: { type: 'text', id: 'reg-username', name: 'username', placeholder: 'Enter a username' } },
        { tag: 'input', attributes: { type: 'email', id: 'email', name: 'email', placeholder: 'Enter an email' } },
        { tag: 'input', attributes: { type: 'password', id: 'reg-password', name: 'password', placeholder: 'Enter a password' } },
        { tag: 'input', attributes: { type: 'password', id: 'confirm-reg-password', name: 'password', placeholder: 'Confirm the password' } },
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

    const formSwitch = document.createElement('p');
    formSwitch.setAttribute("id", "regLogin")
    formSwitch.textContent = "Login";
    main.appendChild(formSwitch);

    document.getElementById('regLogin').addEventListener("click", changeForm);

    //TODO after submit click
    //call authenticate



}

function renderUserPage(){
    
    // location.assign("./habitPage.html");

    

   
    
    const modal = document.getElementById("modal");
    const modalOpen = document.getElementById("newHabitButton");
    const span = document.getElementsByClassName("close")[0];
    console.log(modalOpen);
    
    modalOpen.addEventListener('click', () => modal.style.display = "block");
    span.addEventListener('click', () => modal.style.display = "none");
}

//refactor to event listeners
// modalOpen.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

function renderHabit(habitData) {
    let habit = document.createElement('div');
    habit.setAttribute('class', 'habit');
    let completed = document.createElement('h4');
    completed.setAttribute('class', 'completed');
    if (habitData.completed) {
        completed.innerHTML = 'Completed <span class="completeTick">&#10004;</span>';
    } else {
        completed.innerHTML = "Double click icon if completed";
    }
    habit.appendChild(completed);
    let streakMessage = document.createElement('h4');
    streakMessage.setAttribute('class', 'streakMessage');
    streakMessage.innerHTML = 'Congratulations<br /> you have reached';
    habit.appendChild(completed);
    let habitImg = document.createElement('img');
    habitImg.setAttribute('class', 'habitImg');
    let Imgsrc;
    if (habitData.habitType == "coding") {
        Imgsrc = "static/images/laptop.png";
    } else if (habitData.habitType == "water") {
        Imgsrc = "static/images/water.png";
    } else {
        Imgsrc = "static/images/sleep.png";
    }
    habitImg.setAttribute('src', Imgsrc);
    habit.appendChild(habitImg);
    let streakBubble = document.createElement('div');
    streakBubble.setAttribute('class', 'streak');
    let streakDays = document.createElement('h2');
    streakDays.setAttribute('class', 'streakDays');
    streakBubble.appendChild(streakDays);
    habit.appendChild(streakBubble);
}