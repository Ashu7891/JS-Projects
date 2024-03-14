const form = document.querySelector("#form");
const taskName = document.getElementById("task");
const priorityList = document.getElementById("priority");
const tbody = document.querySelector("tbody");

window.addEventListener("load", () => {
  displayDom(arr);
});
let arr = JSON.parse(localStorage.getItem("todoInfo")) || [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoList = {
    Task: form.task.value,
    Priority: form.priority.value,
  };
  arr.push(todoList);
  displayDom(arr);
  form.task.value = "";
  form.priority.value = "";
  localStorage.setItem("todoInfo", JSON.stringify(arr));
});
// for coding repetition
function displayDom(arr) {
  tbody.innerHTML = null;
  arr.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${element.Task}</td>
            <td>${element.Priority}</td>
            <td><button id="remove" style="background-color:red;color:white; width:70px; height:30px;">Delete</button></td>
        `;
    tbody.append(tr);
  });
    // for Delete Task
  let removeButton = document.querySelectorAll("#remove");
  removeButton.forEach((button, i) => {
    button.addEventListener("click", () => {
      arr.splice(i, 1);
      displayDom(arr);
      localStorage.setItem("todoInfo", JSON.stringify(arr));
    });
  });
}