import loadExpanded from "./renderExpanded";
import loadProjects from "./renderProjectList";
import { listOfProjects, addTask } from "./toDoFactory";



export default function loadTaskList(projectName) {
    
    const taskList = document.getElementById("taskList")
    const completedtaskList = document.getElementById("completedTaskList")
    const taskNames = document.querySelectorAll("#taskList li span");
    function getExistingTaskTitles() {
        const taskNames = document.querySelectorAll("#taskList li span, #completedTaskList li span");
        return Array.from(taskNames).map(span => span.textContent.trim());
    }

    let list = getExistingTaskTitles();
    console.log(list);

    let tasks = localStorage.getItem(projectName);
    tasks = JSON.parse(tasks);

    tasks.forEach(task =>{
        if(!list.includes(task.title)){
          
            const taskItem = document.createElement("li");
            taskItem.classList.add("taskButton")
            const span = document.createElement("span");
            span.textContent=task.title;
            const taskLabel = document.createElement("label");
            taskLabel.id = "taskLabel"
            const taskInput =  document.createElement("input");
            taskInput.type="checkbox";
            taskInput.checked=task.isCompleted;

            taskLabel.append(taskInput);
            
            taskItem.append(taskLabel);
            taskItem.append(span);
        
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
                    const updatedTasks = tasks.map(t => t.title === task.title ? { ...t, isCompleted: task.isCompleted } : t);
                    localStorage.setItem(projectName,JSON.stringify(updatedTasks));
                    console.log(updatedTasks)
                
                    list = getExistingTaskTitles();
                });
                if(task.isCompleted){
                    task.isCompleted = false;
                    taskList.append(taskItem);
                }
                else{
                    task.isCompleted = true;
                    completedtaskList.append(taskItem)
                }
            
           
            
            
            taskItem.addEventListener("click",(e)=>{
                loadExpanded(task);
            })
        }
});
}
