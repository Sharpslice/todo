import { listOfProjects } from "./toDoFactory";

export default function loadProjects(){
    const projects = document.getElementById("projectList");
    
    for(const [key,value] of listOfProjects()){
        const projectItem = document.createElement('li');
        projectItem.classList.add("button");
        projectItem.textContent = key;
        projects.appendChild(projectItem);
    }
   
}
