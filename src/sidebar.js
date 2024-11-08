
import { createTodo, listOfProjects } from "./toDoFactory";
import { renderNewProjectModal } from "./renderModals";
import loadProjects from "./renderProjectList";
import loadContent from "./renderContentPage";
import modalButtonEventListener from "./modalEvent";
import loadTaskList from "./renderTaskList";
const sidebar = document.querySelector('#sideBar');
const buttonDivs = sidebar.querySelectorAll(".button");


export function setUpButtonEventListeners(){
    
    
    const openAddProjectModal = document.getElementById("newProjectBtn");
    openAddProjectModal.addEventListener("click",(e)=>{
        renderNewProjectModal();
    });
    
    

    const projectList = document.querySelector("#projectList");
    projectList.addEventListener('click',e=>{
        if(e.target.classList.contains("button"))
            {
                loadContent(e.target.textContent);
                loadTaskList(e.target.textContent)
               
            }
    })

 
}


    