
import { createTodo, listOfProjects } from "./toDoFactory";
import { renderNewProjectModal } from "./renderModals";
import loadProjects from "./renderProjectList";
import loadContent from "./renderContentPage";
import modalButtonEventListener from "./modalEvent";
import loadTaskList from "./renderTaskList";
import { startOfToday } from "date-fns";
const sidebar = document.querySelector('#sideBar');
const buttonDivs = sidebar.querySelectorAll(".button");


export function setUpButtonEventListeners(){
    



    const todayView = document.getElementById("today");
    todayView.addEventListener("click",e=>{
        loadContent("today")
        loadTaskList(null,{today : true})
    })



    let isActive =false;
    const openAddProjectModal = document.getElementById("newProjectBtn");
    openAddProjectModal.addEventListener("click",(e)=>{
        renderNewProjectModal();
    });

    const deleteProjectBtn = document.getElementById("deleteProjectBtn");
    deleteProjectBtn.addEventListener("click",e=>{
        isActive = !isActive;
    })
    
    

    const projectList = document.querySelector("#projectList");
    projectList.addEventListener('click',e=>{
        if(e.target.classList.contains("button"))
            {
                if(isActive){
                    localStorage.removeItem(e.target.textContent);
                    loadProjects();
                    console.log("deleting: "+e.target.textContent);
                }
                else{
                    loadContent(e.target.textContent);
                    loadTaskList(e.target.textContent);
                }
                
               
            }
    })

 
}


    