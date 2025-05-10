var btn = document.querySelector(".btn");
var progress = document.querySelector("#progress");
// console.log(movers);

var counter = 1;
var selected;



btn.addEventListener("click", function () {
  var project = document.querySelector("#textVal");
  var newli = document.createElement("li");
  newli.innerHTML = project.value;
  newli.classList = "movers";
  newli.id = counter;
  counter++;
  newli.draggable = "true";


  progress.appendChild(newli);
  //   console.log(newli);

  ///////////////////////////

  newli.addEventListener("dragstart", function (e) {
    selected = e.target;
    console.log(selected);

    var tasksSection = document.querySelectorAll(".tasksSection");
    for (let i = 0; i < tasksSection.length; i++) {

      tasksSection[i].addEventListener("dragover", function (e) {
        e.preventDefault();
      });

      tasksSection[i].addEventListener("drop", function (e) {
        e.target.appendChild(selected);
      });
      


    }
  });

  //remove input data
  document.getElementById("textVal").value = "";

  
});
