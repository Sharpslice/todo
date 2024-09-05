

export default function modalButtonEventListener(){
    const cancelBtn =document.getElementById("modalCancelBtn");
    const modal = document.querySelector(".projectModal")
    
    cancelBtn.addEventListener("click",e=>{
        modal.remove();
})
    
}
