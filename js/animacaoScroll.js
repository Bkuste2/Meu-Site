
// Animação por Scroll 

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if(callNow) func.apply(context, args)
    } 
}




const alvo = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    
    const windowTop =  window.pageYOffset + ((window.innerHeight * 3.5) / 4)
    alvo.forEach(function (element) {
        if(windowTop > element.offsetTop){

            element.classList.add(animationClass)
        }
        else{
            element.classList.remove(animationClass)
        }
    })

}

animeScroll();

if(alvo.length){
    window.addEventListener('scroll', debounce (function () {
        animeScroll()
    }, 50))
}

