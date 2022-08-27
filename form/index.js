function check(){
    let password = document.getElementById("password").value;
    let passwordc =document.getElementById("conform-password").value;
    if(password==passwordc){
        document.getElementById("match").innerHTML="match the password";
    }
    else{
        document.getElementById("match").innerHTML="did not match the password";
    }
}
document.getElementById("conform-password").addEventListener("oninput",check);
// document.getElementById("conform-password").addEventListener("oninput",check);


