function validateForm() {
    let username_input = document.forms["register"]["username"].value;
    let full_name=document.forms["register"]["fullname"].value;
    let email=document.forms["register"]["email"].value;
    let password=document.forms["register"]["password"].value;

    let birth_day=document.forms["register"]["birth"].value;

    let gender=document.forms["register"]["gender"].value;

    let location = document.forms["register"]["location"].value;

    
    if (username_input == "") {
        document.getElementById("user_name_req").style.color="red"
      alert("username must be filled out");
      return false;
    }else if(full_name==""){
        document.getElementById("fullname_rew").style.color="red"
        alert("full name   must be filled out");
        return false;
    }else if(email==""){
        document.getElementById("email_req").style.color="red"
        alert("email must be filled out");
        return false;
    }else if (password=="") {
      document.getElementById("password_req").style.color="red"
      alert("password must be filled out or min length is 8");
      return false;
  }else if(birth_day==""){
    document.getElementById("birthday_req").style.color="red"
    alert("birthday must be filled out");
    return false;
   }else if(gender==""){
    document.getElementById("gender_req").style.color="red"
    alert("Gender must be filled out");
    return false;
   }else if(location==""){
    document.getElementById("location_req").style.color="red"
    alert("location must be filled out");
    return false;
   }else{
    
   }



    
  }