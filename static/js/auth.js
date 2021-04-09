const server = 'https://dry-sierra-67697.herokuapp.com';

function currentUser(){
    const username = localStorage.getItem('username');
    console.log("username: " + username);
    return username;
}

async function authenticate(e){ 
    e.preventDefault(); 

    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        let trigger = e.target.id;

        if (trigger === 'register')
        {
            register(options.body);
        } 

        let urlPath = server; 
        urlPath += trigger === 'register' ? '/auth/register' : '/users/login';

        const res = await fetch(urlPath, options);
        const resData = await res.json(); 

        if(resData.id === undefined){
            throw new Error("User does not exist ")
        }

        localStorage.setItem("user-id", resData.id);
        localStorage.setItem("username", resData.username);


        window.location.hash = '#habits'



    } catch(err) {
        console.log("[ERROR]: authentication failed:\n" + err);
        alert("Something went wrong!")

        window.location.hash = '#login'

    }
}


function logout(){
    localStorage.clear(); 
    location.assign("./index.html");
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

        form.insertBefore(errorP, form.children[5])
        throw new Error ("passwords do not match")
    }
}

function confirmPassword(object){
   

    if(object.password !== object.confirm){
      
        return false; 
    }
    return true; 
}

