

document.getElementById("btn").addEventListener('click',stagefirst)
function stagefirst(){
let operationElement=document.getElementById("operation").value;
let rangeElement=document.getElementById("range").value;
// console.log(operationElement,rangeElement);
for(let i=1;i<=16;i++){
    random1(rangeElement);
}
}

function random1(range){
    Math.random()*range;
    Math.trunc(Math.random()*range);
   console.log(Math.trunc(Math.random()*range));
}