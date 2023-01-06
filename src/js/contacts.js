function commentFormValidator(){
    let comment = document.forms["comment"]["comment_con"].value;
    
    let username = document.forms["comment"]["username"].value;

    if (comment==""){
        document.getElementById("comment_req").style.color="red"
        alert("can't send empty comment ");
        return  false;
    }else if (username==""){
        document.getElementById("username_req").style.color="red"
        alert("provide user name plz");
        return false;
    }
}