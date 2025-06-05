const input = document.querySelector("input");
const addButton = document.querySelector(".addbtn");
const taskList = document.querySelector("#taskList")

addButton.addEventListener('click',()=>{
    let inputTask = input.value.trim();
    if(inputTask===""){
        alert("Please Input any Task First!");
        return;
    }
    
    let li = document.createElement("li");
    li.classList.add("task")
    li.textContent = inputTask;
    // event to complete task
    li.addEventListener('click',()=>{
        li.classList.toggle("completed")
    });
// Event to remove task
    li.addEventListener('contextmenu',()=>{
        li.remove();
    });

    
        taskList.appendChild(li);
        input.value = "";
});
