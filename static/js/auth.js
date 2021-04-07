const server = 'http://localhost:3000';

function currentUser(){
    const username = localStorage.getItem('username');


    //remove after dev
    console.log("username: " + username);
    return username;
}




//TODO: function to authenticate
async function authenticate(e){
    //trigered but event listener on submit 
    e.preventDefault(); 

    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application-json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const res = await fetch(`${server}/auth/register`)

    } catch(err) {
        console.log("[ERROR]: authentication failed:\n" + err);
    }
    

}


//TODO: function to authenticate

//TOOD: function check if authentication was successful and redirect
// window.location.hash = '#habits';