let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
// open 
modalBtn.addEventListener("click",()=>{
  modal.style.display = "block"
});
// close by click on the modal
closeBtn.addEventListener("click",()=>{
  modal.style.display = "none"
})

// click anywhere in the window 
window.addEventListener("click",(e)=>{ 
  if(e.target == modal){
    modal.style.display = "none"
  }
})
