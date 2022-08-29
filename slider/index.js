function prev(){
    document.getElementById("img").src="image/chefs-2.jpg";
}
function next(){
    document.getElementById("img").src="image/chefs-3.jpg";
}
document.getElementById("prev").addEventListener("click",prev);
document.getElementById("next").addEventListener("click",next);
