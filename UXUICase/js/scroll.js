const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - 300)){
            current = section.getAttribute('id');
        }
    })
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
    console.log(current);
})