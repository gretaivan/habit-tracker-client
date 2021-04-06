function currentUser(){
    const username = localStorage.getItem('username');

    
    //remove after dev
    console.log("username: " + username);
    return username;
}