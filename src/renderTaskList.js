import { listOfProjects, addTask } from "./toDoFactory";



export default function loadTaskList(projectName) {
    
     
     
   
    const taskList = document.getElementById("taskList")
    const temp = Array.from(document.querySelectorAll("#taskList li"));
    const list = temp.map(item=>item.textContent);
    listOfProjects().get(projectName).forEach(item=>{
        if(!list.includes(item.title))
        {
            const taskItem = document.createElement("li");
            const taskDiv = document.createElement("div");
            const title = document.createElement("span");
            title.textContent=item.title;
            taskDiv.appendChild(title);
            taskItem.appendChild(taskDiv);
            taskList.appendChild(taskItem)
        }
        
        
        
        // taskList.appendChild(tasks);


    })

    
   

}