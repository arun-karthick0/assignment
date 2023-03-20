let btn=document.querySelector(".switch-btn");
let video=document.querySelector(".video-bg");

btn.addEventListener("click",()=>{
   if(!btn.classList.contains("slide")){
    btn.classList.add("slide");
    video.pause()
   }
   else{
    btn.classList.remove("slide");
    video.play()
   }
});