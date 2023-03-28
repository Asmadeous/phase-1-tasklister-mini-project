document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskInput = document.getElementById("new-task-description")
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const task = taskInput.value;
        const taskList =  document.getElementById("tasks");
        const tasky = document.createElement("li");
        tasky.innerText = task
        const btn = document.createElement("button");
        btn.innerText = "x";
        tasky.appendChild(btn);
        taskList.appendChild(tasky);
        btn.addEventListener("click", function() {
           tasky.remove();
    });
})
})
