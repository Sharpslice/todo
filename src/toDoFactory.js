import { compareAsc,format } from "date-fns";

const PRIORITY = Object.freeze({
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
});


export function createTodo(title,desc,dueDate,priority,isCompleted)
{
    return{
        title,
        desc,
        dueDate,
        priority,
        isCompleted
    }
}

const projects = new Map();


export function listOfProjects()
{
    return projects;
}

export function addTask(projectName,toDoTask)
{
    let tasks = localStorage.getItem(projectName);

    if(tasks){
        tasks= JSON.parse(tasks)
    }
    else{
        tasks = [];
    }
    


    tasks.push(toDoTask);
    localStorage.setItem(projectName,JSON.stringify(tasks));
    // tasks.push(toDoTask)
    
}