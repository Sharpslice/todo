
import { createTodo, listOfProjects } from "./toDoFactory";
import { renderNewProjectModal } from "./renderModals";
import loadProjects from "./renderProjectList";
import loadContent from "./renderContentPage";
import modalButtonEventListener from "./modalEvent";

const sidebar = document.querySelector('#sideBar');
const buttonDivs = sidebar.querySelectorAll(".button");
const buttonActions ={
    'newProjectBtn': ()=> renderNewProjectModal(),
    'projectAddBtn': ()=> addProject()
}


export function setUpButtonEventListeners(){
    buttonDivs.forEach(button => {
        button.addEventListener('click',(e)=>{
            const action = buttonActions[e.target.id];
            if(action)
            {
                action();
                modalButtonEventListener();
            }
            console.log(e.target)
        })
    });
    
    document.addEventListener('click',(e)=>{
        const action = buttonActions[e.target.id];
        if(e.target && e.target.id==="projectAddBtn")
        {
            action();
            
        }
    })

    const projectList = document.querySelector("#projectList");
    projectList.addEventListener('click',e=>{
        if(e.target.classList.contains("button"))
            {
                loadContent(e.target.textContent);
            }
    })
    
}

function addProject(){
    const projectName = document.getElementById("projectName")
        if(listOfProjects().has(projectName.value))
        {
            console.log("error: project exists")
            return;
        }
        listOfProjects().set(projectName.value,[]);
        loadProjects();

        console.log(listOfProjects());
}