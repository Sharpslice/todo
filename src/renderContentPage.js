import { de } from "date-fns/locale";
import { listOfProjects,createTodo } from "./toDoFactory";
import loadTaskList from "./renderTaskList";
import { addTask } from "./toDoFactory";


const content = document.getElementById("content"); 
export default function loadContent(projectName){
    content.innerHTML='';

    const projectHeader = createHeader(projectName);
    const form = createTaskForm(projectName);
    const ul = createTaskListUl();

    content.appendChild(projectHeader);
    content.appendChild(form);
    content.appendChild(ul);
 
}
function createHeader(projectName){
    const project = document.createElement("span");
    project.id= "projectName";
    project.textContent=projectName;
    return project;
}

function createTaskListUl(){
    const ul = document.createElement("ul");
    ul.id = "taskList";
    return ul;
}

function createTaskForm(projectName){
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    form.id="createTaskForm";

    const task = createInput("text","taskInput","Enter Task");
    const desc = createInput("text","descInput","Enter Desc");
    const addBtn = createButton("taskAddBtn","button","add");
    const cancelBtn = createButton("taskCancelBtn","button","cancel");

    form.append(task,document.createElement("br"),desc,document.createElement("br"),
    addBtn,cancelBtn);
    formDiv.appendChild(form);
    return form;
}

function createInput(type,id,placeholder){
    const taskInput = document.createElement("input");
    taskInput.type=type;
    taskInput.id = id;
    taskInput.placeholder=placeholder;
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
    let desc = document.getElementById("descInput")
    addTask(projectName,createTodo(task.value,desc.value,"tomorrow","sdadsa")); 
    loadTaskList(projectName);
}

function createDropDownMenu(){
    const dropdownDiv = document.createElement("div");

    const dropdownBtn = createButton("dropdownBtn","button","Priority")
    
    
    const menu = document.createElement("ul");
    menu.id="menu";
    const btn1 = document.createElement("li");
    const btn2 = document.createElement("li");
    const btn3 = document.createElement("li");
    btn1.textContent="High";
    btn2.textContent="Medium";
    btn3.textContent="Low";

    dropdownDiv.appendChild(dropdownBtn);
    menu.appendChild(btn1);
    menu.appendChild(btn2);
    menu.appendChild(btn3);
    dropdownDiv.appendChild(menu);
}

const dropBtn = document.querySelector("button")

dropBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const menu =document.getElementById("menu");
    toggleDropDownMenu(menu);
    
})




function toggleDropDownMenu(element){
    if (element.classList.contains("active"))
    {
        element.classList.remove("active");
    }
    else{
        element.classList.add("active");
    }
}