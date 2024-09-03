const sidebar = document.querySelector('#sideBar');
const buttonDivs = sidebar.querySelectorAll(".button");
import { createTodo, listOfProjects } from "./toDoFactory";
import { renderNewProjectModal } from "./renderModals";



const buttonActions ={
    'newProjectBtn': ()=> renderNewProjectModal()
}

export function setUpButtonEventListeners(){
    buttonDivs.forEach(button => {
        button.addEventListener('click',(e)=>{
            const action = buttonActions[e.target.id];
            if(action)
            {
                action();
            }
        })
    });
    document.addEventListener('click',(e)=>{
        if(e.target && e.target.id==="projectAddBtn")
        {
            listOfProjects().set("test",null);
            console.log(listOfProjects());
        }
    })
    
}

