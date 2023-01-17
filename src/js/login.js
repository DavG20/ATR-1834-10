function validateForm(){
    let userName = document.forms["login"]["username"].value;
    
    let password = document.forms["login"]["password"].value;

    if (userName==""){
        document.getElementById("username_req").style.color="red"
        alert("User name is required");
        return  false;
    }else if (password==""){
        document.getElementById("password_req").style.color="red"
        alert("password field is empty");
        return false;
    }
    // document.getElementById("sighup").innerHTML=userName
}