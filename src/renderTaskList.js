import loadExpanded from "./renderExpanded";
import loadProjects from "./renderProjectList";
import { listOfProjects, addTask } from "./toDoFactory";
import { addDays,isSameDay} from "date-fns";


export default function loadTaskList(projectName =null, filter ={}) {

    let tasks =[];
    //this is where it should filter
    if(projectName)
    {
        tasks = localStorage.getItem(projectName);
        tasks = JSON.parse(tasks);   
    }
    else if (filter.today)
    {   
        const keys = Object.keys(localStorage);
        tasks = keys.map((key)=>{
           return JSON.parse(localStorage.getItem(key));
        }).flat();
        tasks = tasks.filter(task=>isSameDay(task.dueDate,filter.today))
        
    }
    else if(filter.all)
    {
        const keys = Object.keys(localStorage);
        tasks = keys.map((key)=>{
           return JSON.parse(localStorage.getItem(key));
        }).flat();
    }
    
    tasks.forEach(task =>{
        
        renderTasks(task,tasks,projectName)
});
}

function renderTasks(task,tasks,projectName){
    const {taskItem,taskInput} = createTaskTile(task);
    moveTasks(task,taskItem);
            
    taskInput.addEventListener("click",(e)=>
        {
            moveTasks(task,taskItem);
            updateLocalStorage(tasks,task,projectName);
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

function updateLocalStorage(tasks,task){
    
    

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
