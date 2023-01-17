function paymentValidator(){

    let username_input = document.forms["payment"]["username"].value;
    let equib_id=document.forms["payment"]["equbid"].value;
    let email=document.forms["payment"]["email"].value;
    

    let birth_day=document.forms["payment"]["birth"].value;

    let gender=document.forms["payment"]["gender"].value;

    let amount = document.forms["payment"]["amount"].value;

    
    if (username_input == "") {
        document.getElementById("username_req").style.color="red"
      alert("username must be filled out");
      return false;
    }else if(equib_id==""){
        document.getElementById("equb_req").style.color="red"
        alert("equbid   must be filled out");
        return false;
    }else if(email==""){
        document.getElementById("email_req").style.color="red"
        alert("email must be filled out");
        return false;
  }else if(birth_day==""){
    document.getElementById("birth_req").style.color="red"
    alert("birthday must be filled out");
    return false;
   }else if(gender==""){
    document.getElementById("gender_req").style.color="red"
    alert("Gender must be filled out");
    return false;
}else if(amount==""){
    document.getElementById("amoun_req").style.color="red"
    alert("amount must be filled out");
    return false;
}
   

}