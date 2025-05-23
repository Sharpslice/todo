import { de } from "date-fns/locale";
import { listOfProjects,createTodo } from "./toDoFactory";
import loadTaskList from "./renderTaskList";
import { addTask } from "./toDoFactory";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { parse } from "date-fns";
const content = document.getElementById("content"); 
export default function loadContent(projectName){
    content.innerHTML='';
    const projectHeader = createHeader(projectName);
    
    const form = createTaskForm(projectName);
    
    
    
    const ul = createTaskListUl("taskList");
    const divider = document.createElement("span");
    divider.textContent="IN PROGRESS";
    const divider2 = document.createElement("span");
    divider2.textContent="COMPLETED";
    const completedUl = createTaskListUl("completedTaskList");


    content.appendChild(projectHeader);
    content.appendChild(document.createElement("br"))
    content.appendChild(form);
    
    
    content.appendChild(divider);
    content.appendChild(ul);
    content.appendChild(divider2);
    content.appendChild(completedUl);
    
}
function createHeader(projectName){
    const project = document.createElement("span");
    project.id= "projectName";
    project.textContent=projectName;
    return project;
}

function createTaskListUl(id){
    const ul = document.createElement("ul");
    ul.id = id;
    return ul;
}

function createTaskForm(projectName){
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    form.id="createTaskForm";

    const task = createInput("text","taskInput","Enter Task");
    const desc = createInput("text","descInput","Enter Desc");

    const calendar = document.createElement("input");
    calendar.id = "dateInput";
    flatpickr(calendar,{
        dateFormat: "m-d-Y",
        
    });
    

    const addBtn = createButton("taskAddBtn","button","add");
    const cancelBtn = createButton("taskCancelBtn","button","cancel");

    const dropdown = createDropDownMenu();


    form.append(task,document.createElement("br"),desc,document.createElement("br"),calendar,
    addBtn,cancelBtn,dropdown);
    formDiv.appendChild(form);
    return form;
}

function createInput(type,id,placeholder){
    const taskInput = document.createElement("input");
    taskInput.type=type;
    taskInput.id = id;
    taskInput.placeholder=placeholder;
    taskInput.required=true;
    return taskInput
}
function createButton(id,type,textContent){
   
    const btn = document.createElement("button");
    btn.id = id;
    btn.type=type;
    btn.textContent=textContent;
    btn.addEventListener("click",btnHandler);
    return btn;
}
function btnHandler(event){
    const projectName = document.getElementById("projectName").textContent;
    let task = document.getElementById("taskInput");
    let desc = document.getElementById("descInput");
    let priority = document.getElementById("menu").dataset.value;
    
    let tmp = JSON.parse(localStorage.getItem(projectName));
    const isDuplicate = tmp.some(title => title.title === task.value)
   
    let form = document.getElementById("createTaskForm");
    if(form.reportValidity()){
        if(isDuplicate){
            console.log("duplicate!");
        }
        else{
            console.log("dateInput: "+ document.getElementById("dateInput").value)
            
            let date = convertToDateObj(document.getElementById("dateInput").value)
            console.log("parsed date: " +date);
            console.log(typeof date)
            addTask(projectName,createTodo(projectName,task.value,desc.value,date,priority,false)); 
            loadTaskList(projectName);
            console.log("not duplicate");
            
            
        }
    }
}
function convertToDateObj(dateStr){
    let parsedDate = parse(dateStr,"MM-dd-yyyy",new Date());
    parsedDate.setHours(0,0,0,0);
    return parsedDate;
}
function createDropDownMenu(){
    const dropdownDiv = document.createElement("div");
    dropdownDiv.id = "dropdownContainer";

    const dropdownBtn = document.createElement("button");
    dropdownBtn.id="dropBtn";
    dropdownBtn.type="button";
    dropdownBtn.textContent="Priority";

    dropdownBtn.addEventListener('click',(e)=>{
        const menu =document.getElementById("menu");
        toggleDropDownMenu(menu);
        
    })
    
    
    const PRIORITY = ["High","Normal","Low"];
    const menu = document.createElement("ul");
    menu.id="menu";
    menu.dataset.value="Normal";
    PRIORITY.forEach((priority) =>{
        const btn = document.createElement("li");
        btn.textContent=priority;
        btn.addEventListener("click",(e)=>{
            console.log("changed priority to " + priority)
            menu.dataset.value=priority;
        });
        menu.append(btn);
    });
   
    dropdownDiv.append(dropdownBtn,menu);
    
    return dropdownDiv;
}



function toggleDropDownMenu(element){
    if (element.classList.contains("active"))
    {
        element.classList.remove("active");
    }
    else{
        element.classList.add("active");
    }
}