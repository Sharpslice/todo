

export default function loadExpanded(task){
    const expandedDiv = document.getElementById("expanded");
    expandedDiv.innerHTML="";

    let dueDateSpan = document.createElement("span");
    dueDateSpan.textContent= task.dueDate;

    let expandedForm = document.createElement("form")

    let textField = document.createElement("textarea");
   
    textField.id = "expandedTextField";
    textField.value = task.desc;
    expandedForm.appendChild(textField);
    expandedDiv.appendChild(dueDateSpan);
    expandedDiv.appendChild(expandedForm);

}