function check(){
    let password = document.getElementById("password").value;
    let password2 =document.getElementById("conform-password").value;
    if(password==password2){
        document.getElementById("match").innerHTML="match the password"
    }
    else{
        document.getElementById("match").innerHTML="did not match the password"
    }
}

