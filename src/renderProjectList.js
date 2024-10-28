import { listOfProjects } from "./toDoFactory";
import { setUpButtonEventListeners } from "./sidebar";

export default function loadProjects(){
    const projects = document.getElementById("projectList");

    Object.keys(localStorage).forEach((key)=>{
        const projectItem = document.createElement('li');
        const temp = Array.from(document.querySelectorAll("#projectList li"));
        const list = temp.map(item=>item.textContent);
        if(!list.includes(key))
        {
            projectItem.classList.add("button");
            projectItem.textContent = key;
            projects.appendChild(projectItem);
        }
        
    })
    
}
