import loadExpanded from "./renderExpanded";
import loadProjects from "./renderProjectList";
import { listOfProjects, addTask } from "./toDoFactory";



export default function loadTaskList(projectName) {
    
    
    const taskList = document.getElementById("taskList")
    const completedtaskList = document.getElementById("completedTaskList")
    const temp = Array.from(document.querySelectorAll("#taskList li"));
    const list = temp.map(item=>item.textContent);
   
    let tasks = localStorage.getItem(projectName);
    tasks = JSON.parse(tasks);

    tasks.forEach(task =>{
        if(!list.includes(task.title)){
            console.log("adding: "+task.title)
            const taskItem = document.createElement("li");
            taskItem.classList.add("taskButton")
          
            const span = document.createElement("span");
            span.textContent=task.title;

            const taskLabel = document.createElement("label");
            taskLabel.id = "taskLabel"
            const taskInput =  document.createElement("input");
            taskInput.type="checkbox";
            taskInput.checked=task.isCompleted;

            taskInput.addEventListener("click",(e)=>
                {
                    if(task.isCompleted){
                        task.isCompleted = false;
                        taskList.append(taskItem);
                    }
                    else{
                        task.isCompleted = true;
                        completedtaskList.append(taskItem)
                    }
                    let updatedTasks = tasks.map(t => t.title === task.title ? task: t);
                    localStorage.setItem(projectName,JSON.stringify(updatedTasks));
                    console.log(updatedTasks)
                    

                    
                });

            taskLabel.append(taskInput);
            
            taskItem.append(taskLabel);
            taskItem.append(span);
            if(task.isCompleted)
            {
                completedtaskList.append(taskItem);
            }
            else{
                taskList.append(taskItem);
            }
            
            
            taskItem.addEventListener("click",(e)=>{
                loadExpanded(task);
            })
        }
    });


   

    
   

}