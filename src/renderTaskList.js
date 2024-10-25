import loadExpanded from "./renderExpanded";
import { listOfProjects, addTask } from "./toDoFactory";



export default function loadTaskList(projectName) {
    
    
    const taskList = document.getElementById("taskList")
    const temp = Array.from(document.querySelectorAll("#taskList li"));
    const list = temp.map(item=>item.textContent);
    listOfProjects().get(projectName).forEach(item=>{
        if(!list.includes(item.title))
        {
            const taskItem = document.createElement("li");
            taskItem.classList.add("taskButton")
            taskItem.textContent=item.title;
            taskList.appendChild(taskItem)
            taskItem.addEventListener('click',(e)=>{
                
                loadExpanded(item);
            })
        }
        
        
        
        // taskList.appendChild(tasks);


    })

    
   

}