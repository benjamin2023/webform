function login(){
    const username = document.getElementById("login-user").value.toLowerCase().trim();
    
    const password = document.getElementById("login-password").value; 
    if(username==""){
        alert("No username entered");
    }else if(password==""){
        alert("No password entered");
    }else{
        login(username, password);
    }
}

