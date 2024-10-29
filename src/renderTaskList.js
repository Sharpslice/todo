import loadExpanded from "./renderExpanded";
import loadProjects from "./renderProjectList";
import { listOfProjects, addTask } from "./toDoFactory";



export default function loadTaskList(projectName) {
    
    
    const taskList = document.getElementById("taskList")
    const temp = Array.from(document.querySelectorAll("#taskList li"));
    const list = temp.map(item=>item.textContent);
   
    let tasks = localStorage.getItem(projectName);
    tasks = JSON.parse(tasks);

    tasks.forEach(task =>{
        if(!list.includes(task.title)){
            console.log(task.priority);
            const taskLabel = document.createElement("label");
            taskLabel.id = "taskLabel"
            const taskInput =  document.createElement("input");
            taskInput.type="checkbox";

            const taskItem = document.createElement("li");
            taskItem.classList.add("taskButton")
            taskItem.textContent=task.title;


            taskLabel.appendChild(taskInput);
            taskLabel.appendChild(taskItem);
            taskList.appendChild(taskLabel);
            
            taskItem.addEventListener("click",(e)=>{
                loadExpanded(task);
            })
        }
        
        
    });

   

    
   

}