import { de } from "date-fns/locale";
import { listOfProjects,createTodo } from "./toDoFactory";
import loadTaskList from "./renderTaskList";
import { addTask } from "./toDoFactory";
const content = document.getElementById("content"); 
export default function loadContent(projectName){
    content.innerHTML='';
    /////////
    const ul = document.createElement("ul");
    ul.id = "taskList";
////////////////////////////////////
    const project = document.createElement("span");
    project.textContent=projectName;

    const formDiv = document.createElement("div");
    
    const form = document.createElement("form");
    
    const taskInput = document.createElement("input");
    taskInput.type="text";
    taskInput.id = "taskInput";
    taskInput.placeholder="enter task"

    const descInput = document.createElement("input");
    descInput.type="text";
    descInput.id = "descInput";
    descInput.placeholder="enter desc"
   
    const addBtn = document.createElement("button");
    addBtn.id = "taskAddBtn";
    addBtn.textContent="add"
    addBtn.type="button";
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent="cancel"
    cancelBtn.type="button";
    
    form.appendChild(taskInput);
    form.appendChild(document.createElement('br'))
    form.appendChild(descInput)
    form.appendChild(addBtn);
    form.appendChild(cancelBtn);
    formDiv.appendChild(form);
    project.appendChild(formDiv)


    
    content.appendChild(project);
    content.appendChild(ul);
    console.log(listOfProjects()[0]);
    addBtn.addEventListener("click",e=>{

        let task = document.getElementById("taskInput");
        let desc = document.getElementById("descInput")
        addTask(projectName,createTodo(task.value,desc.value,"tomorrow","sdadsa")); 
        loadTaskList(projectName);
    })

}

