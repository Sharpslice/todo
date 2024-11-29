import loadExpanded from "./renderExpanded";
import loadProjects from "./renderProjectList";
import { listOfProjects, addTask } from "./toDoFactory";
import { addDays,isSameDay} from "date-fns";


export default function loadTaskList(projectName =null, filter ={}) {
    let list = [];
    let tasks =[];
    
    if(projectName)
    {
        list = getExistingTaskTitles();
        tasks = localStorage.getItem(projectName);
        tasks = JSON.parse(tasks);
        
    }
    else
    {   
        const keys = Object.keys(localStorage);
        tasks = keys.map((key)=>{
           return JSON.parse(localStorage.getItem(key));
        }).flat();
        console.log(tasks)
        
    }
    console.log(tasks);
    tasks.forEach(task =>{
        if(!list.includes(task.title)){
             
            renderTasks(task,tasks,projectName,list)
                
                
        }
});
}

function renderTasks(task,tasks,projectName,list){
    const {taskItem,taskInput} = createTaskTile(task);
            moveTasks(task,taskItem);
                    
            taskInput.addEventListener("click",(e)=>
                {
                    moveTasks(task,taskItem);
                    updateLocalStorage(tasks,task,projectName,list);
                });

            taskItem.addEventListener("click",(e)=>{
                loadExpanded(task);
            })
}

function moveTasks(task,taskItem){
    const taskList = document.getElementById("taskList")
    const completedtaskList = document.getElementById("completedTaskList")

    if(taskItem.parentNode){ //has parent
        if(task.isCompleted){
            task.isCompleted = false;
            taskList.append(taskItem);
        }
        else{
            task.isCompleted = true;
            completedtaskList.append(taskItem)
        }
    }
    else{ //no parent
        if(task.isCompleted){
            completedtaskList.append(taskItem)
        }
        else{
            taskList.append(taskItem)
        }
    }
}

function updateLocalStorage(tasks,task,projectName,list){
    const updatedTasks = tasks.map(t => t.title === task.title ? { ...t, isCompleted: task.isCompleted } : t);

    if(projectName == null)
    {
        localStorage.setItem(task.projectName,JSON.stringify(updatedTasks));
    }
    else{
        localStorage.setItem(projectName,JSON.stringify(updatedTasks));
    }
    
    console.log(updatedTasks)

    list = getExistingTaskTitles();
}

function getExistingTaskTitles() {
    const taskNames = document.querySelectorAll("#taskList li span, #completedTaskList li span");
    return Array.from(taskNames).map(span => span.textContent.trim());
}

function createTaskTile(task){
    const taskItem = document.createElement("li");
            taskItem.classList.add("taskButton")
            taskItem.setAttribute("data-priority",task.priority);
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

            return {taskItem, taskInput};
}
