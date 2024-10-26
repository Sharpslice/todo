import loadExpanded from "./renderExpanded";
import { listOfProjects, addTask } from "./toDoFactory";



export default function loadTaskList(projectName) {
    
    
    const taskList = document.getElementById("taskList")
    const temp = Array.from(document.querySelectorAll("#taskList li"));
    const list = temp.map(item=>item.textContent);
   
    let tasks = localStorage.getItem(projectName);
    tasks = JSON.parse(tasks);

    tasks.forEach(task =>{
        if(!list.includes(task.title)){
            const taskItem = document.createElement("li");
            taskItem.classList.add("taskButton")
            taskItem.textContent=task.title;
            taskList.appendChild(taskItem)
        }
        
        
    });

   

    
   

}