if(window.screen.width <= 990){
    
    const about = document.querySelector('.about-link');
    const sub = document.querySelector('.about-sub');

    about.addEventListener('click',(e)=>{
        e.preventDefault();
        sub.style.display='block';
    })
}

