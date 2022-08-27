// function check(){
//     let unit=document.getElementById("unitprice").innerText;
//     let qty=document.getElementById("quality").value;
//     let total=unit*qty;
//     let result=document.getElementById("price").innerHTML=total;
// }
// document.getElementById("trigger").addEventListener("click",check);


function check() {
let row =this.parentNode.parentNode ;   
let unit =row.getElementsByClassName("unitprice")[0].innerText;
let qty=row.getElementsByClassName("quality")[0].value;
let total=unit*qty;
let final=row.getElementsByClassName("price")[0].innerHTML=total;
}
let button =document.getElementsByClassName("trigger");
for(i=0;i<button.length;i++){
    button[i].addEventListener("click",check);
}
