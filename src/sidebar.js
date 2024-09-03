const sidebar = document.querySelector('#sideBar');
const buttonDivs = sidebar.querySelectorAll(".button");
import { createTodo, listOfProjects } from "./toDoFactory";

export function setUpButtonEventListeners(){
    buttonDivs.forEach(button => {
        button.addEventListener('click',(e)=>{
            
            console.log(e.target);
            
        })
    });
}

