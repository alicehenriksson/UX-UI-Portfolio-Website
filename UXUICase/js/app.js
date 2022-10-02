$(document).foundation()
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        if(document.body.style.overflow === "hidden"){
            document.body.style.overflow = "visible"
        } else {
            document.body.style.overflow = "hidden"
        }
       
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        }); 
        
    });
}
navSlide();
function closeNav(){
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    if(nav.classList.contains('nav-active')){

        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
              link.style.animation = ''
            } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        if(document.body.style.overflow === "hidden"){
            document.body.style.overflow = "visible"
        } else {
            document.body.style.overflow = "hidden"
        }
    }
    
};