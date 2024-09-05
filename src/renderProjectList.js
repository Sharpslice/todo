import { listOfProjects } from "./toDoFactory";
import { setUpButtonEventListeners } from "./sidebar";

export default function loadProjects(){
    const projects = document.getElementById("projectList");
    const temp = Array.from(document.querySelectorAll("#projectList li"));
    const list = temp.map(item=>item.textContent);
    for(const [key,value] of listOfProjects()){
        if(list.includes(key))
        {
            continue;
        }
        const projectItem = document.createElement('li');
        projectItem.classList.add("button");
        projectItem.textContent = key;
        projects.appendChild(projectItem);
        

    }
   
}
