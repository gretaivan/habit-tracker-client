const server = 'http://localhost:3000';

function currentUser(){
    const username = localStorage.getItem('username');
    //remove after dev
    console.log("username: " + username);
    return username;
}

async function authenticate(e){
    //trigered but event listener on submit 
    e.preventDefault(); 

    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        let trigger = e.target.id;

        if (trigger === 'register') register(options.body);

        let urlPath = server; 
        urlPath += trigger === 'register' ? '/auth/register' : '/users/login';

        //delete console.log post dev
        console.log(urlPath);
        console.log(options.body)

        const res = await fetch(urlPath, options);
        const resData = await res.json(); 
      
        localStorage.setItem("user-id", resData.id);
        localStorage.setItem("username", resData.username);
        window.location.hash = '#habits'


    } catch(err) {
        console.log("[ERROR]: authentication failed:\n" + err);
        alert("Something went wrong!")
    }
}


function logout(){
    localStorage.clear(); 
    location.hash = '#login'
}

function register(data){
    let object = JSON.parse(data)
    console.log(object.password)


    let passValid = confirmPassword(object)

    if(!passValid){
        console.log("Passwords did not match")

        var errorP = document.createElement("P");
        errorP.textContent = "passwords must match";
        errorP.style.color = "red";

        console.log(errorP)
        let form = document.getElementById('register')
        console.log(form.childNodes)

        //P will need styling!

        form.insertBefore(errorP, form.children[5])
    }
}

function confirmPassword(object){
   

    if(object.password !== object.confirm){
      
        return false; 
    }
    return true; 
}


//TODO: function to authenticate

//TOOD: function check if authentication was successful and redirect
// window.location.hash = '#habits';