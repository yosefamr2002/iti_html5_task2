var textVal  = document.querySelector("#textVal");
var btn = document.querySelector(".btn");
var inProgress = document.querySelector(".tasksSection");

var arr = []

btn.addEventListener("click",function(){
    arr.push(textVal.value);
    console.log(arr);
   display() 

 
})



// 1



function display (){
    var cartona = ``;    
  for(let i =0 ; i<=arr.length-1 ; i++){ 
    cartona+= `<div class= "ulx" draggable="true" id="tasktitle${i}">
                    <li >${arr[i]}</li>
                </div>`; }
inProgress.innerHTML=cartona;
addeventtoUl()
}

function addeventtoUl(){

var ulx = document.querySelectorAll(".ulx");
for(var i = 0 ; i < ulx.length ; i++){
    ulx[i].addEventListener("dragstart",dragstartFn)
}

}
//////////////////////////

var tasksSection = document.querySelectorAll(".tasksSection");

for(let i =0 ; i<tasksSection.length ; i++){
    tasksSection[i].addEventListener("dragover",dragoverFn)
    tasksSection[i].addEventListener('drop',dropFn)
}


function dragstartFn(e){
    e.dataTransfer.setData('text', e.target.id)
}


function dragoverFn (e){
    e.preventDefault();
}

function dropFn(e){
    var dragedItem = document.getElementById(e.dataTransfer.getData('text'));
    this.appendChild(dragedItem);
}