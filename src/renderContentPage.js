import { de } from "date-fns/locale";
import { listOfProjects } from "./toDoFactory";


const content = document.getElementById("content"); 
export default function loadContent(projectName){
    content.innerHTML='';
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
   
    
    form.appendChild(taskInput);
    form.appendChild(document.createElement('br'))
    form.appendChild(descInput)
    formDiv.appendChild(form);
    project.appendChild(formDiv)


    
    content.appendChild(project);
    console.log(listOfProjects()[0]);


}