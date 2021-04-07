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
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        let trigger = e.target.id;
        let urlPath = server; 
        urlPath += trigger === 'register' ? '/auth/register' : '/users/login';

        //delete console.log post dev
        console.log(urlPath);
        console.log(options.body)

        const res = await fetch('http://localhost:3000/auth/register', options);
        const resData = await res.json(); 
        console.log(resData)


        //if (resData.err){ throw Error(resData.err) }
        
        localStorage.setItem("user-id", 1);
    //return id & username [server] of the user for both registration and login 
        window.location.hash = '#habits'

    } catch(err) {
        console.log("[ERROR]: authentication failed:\n" + err);
    }
    

}


//TODO: function to authenticate

//TOOD: function check if authentication was successful and redirect
// window.location.hash = '#habits';