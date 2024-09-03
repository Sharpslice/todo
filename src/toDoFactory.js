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

const projects ={}

export function listOfProjects()
{
    return projects;
}