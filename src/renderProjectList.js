import { listOfProjects } from "./toDoFactory";
import { setUpButtonEventListeners } from "./sidebar";

export default function loadProjects(){
    const projects = document.getElementById("projectList");
    projects.innerHTML="";
    Object.keys(localStorage).forEach((key)=>{
        
        const projectItem = document.createElement('li');
        const temp = Array.from(document.querySelectorAll("#projectList li"));
        const list = temp.map(item=>item.textContent);
        console.log("list: "+list)
        if(!list.includes(key))
        {
            console.log("loading projects: "+key)
            projectItem.classList.add("button");
            projectItem.textContent = key;
            projects.appendChild(projectItem);
        }
        
    })
    
}
