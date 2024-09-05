import { compareAsc,format } from "date-fns";

const PRIORITY = Object.freeze({
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
});


export function createTodo(title,desc,dueDate,priority)
{
    return{
        title,
        desc,
        dueDate,
        priority
    }
}

const projects = new Map();


export function listOfProjects()
{
    return projects;
}

export function addTask(projectName,toDoTask)
{
    // console.log(listOfProjects().get(projectName));
    listOfProjects().get(projectName).push(toDoTask);
}