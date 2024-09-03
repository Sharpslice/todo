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