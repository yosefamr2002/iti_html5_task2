var btn = document.querySelector(".btn");
var input = document.getElementById("textVal");
var sections = document.querySelectorAll(".tasksSection");

var selected = null;
var counter = 1;

window.onload = function () {
  if (localStorage.getItem("tasks")) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task) => {
      createTask(task.text, task.section, task.id);
    });
    counter = tasks.length + 1;
  }
};

btn.addEventListener("click", function () {
  let text = input.value;
  if (text !== "") {
    createTask(text, "progress", counter);
    saveToLocalStorage();
    counter++;
    input.value = "";
  }
});

function createTask(text, sectionType, id) {
  let li = document.createElement("li");
  li.textContent = text;
  li.className = "movers";
  li.id = "task-" + id;
  li.draggable = true;

  li.addEventListener("dragstart", function () {
    selected = this;
  });

  let section = document.getElementById(sectionType);
  section.appendChild(li);
}

sections.forEach((section) => {
  section.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  section.addEventListener("drop", function () {
    if (selected) {
      this.appendChild(selected);
      saveToLocalStorage();
    }
  });
});

function saveToLocalStorage() {
  let allTasks = [];
  sections.forEach((section) => {
    let type = section.id;
    let items = section.querySelectorAll("li");
    items.forEach((li) => {
      allTasks.push({
        id: li.id,
        text: li.textContent,
        section: type
      });
    });
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}
