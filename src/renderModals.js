
const body= document.querySelector("#container")

export function renderNewProjectModal(){
    const modal = document.createElement("div");
    modal.classList.add("projectModal", "hidden");
    

    const form = document.createElement("form");
    form.id="projectForm";
    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent ="Add Project";
    projectNameLabel.setAttribute('for','projectName');

    const projectNameInput = document.createElement("input");
    projectNameInput.type="text";
    projectNameInput.id = "projectName";
    projectNameInput.name = 'projectName';
    projectNameInput.placeholder="enter project name"

    const addBtn = document.createElement("button");
    addBtn.id = "projectAddBtn";
    addBtn.type="button";
    addBtn.textContent="add";

    const cancelBtn = document.createElement("button");
    cancelBtn.type="button";
    cancelBtn.id = "modalCancelBtn";
    cancelBtn.textContent="cancel";

    
    form.append(projectNameLabel);
    form.append(document.createElement('br'))
    form.append(projectNameInput);
    form.append(document.createElement('br'))
    form.append(addBtn);
    form.append(cancelBtn);
    
    modal.append(form);
    body.appendChild(modal);


    
}