let li=document.querySelectorAll('.my-nav-link')
let sec=document.querySelectorAll('.my-section');
function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 <sec[len].offsetTop){}
    li.forEach(ltx=>ltx.classList.remove("myActive"));
    li[len].classList.add("myActive");
}
activeMenu();
window.addEventListener('scroll',activeMenu);
window.addEventListener('scroll',()=>{
    // console.log("hey");
    let header=document.querySelector(".navbar");
    let decesion=window.scrollY>316;
   
  
    header.classList.toggle("myNavActive",decesion);
   
   

})