// Scroll Para Link Interno

const menuItems = document.querySelectorAll('.ulFixo ul li a[href^="#"]')


menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})


function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

let jaFoiClicado = false;
let body = document.querySelector('body')

function scrollToIdOnClick(event) {
  if (jaFoiClicado == false) {
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 80
    scrollToPosition(to)
    jaFoiClicado = true
    body.style.overflowY = 'hidden'
    setTimeout(()=>{
      jaFoiClicado = false
      body.style.overflowY = 'visible'
    }, 1100)
  }
  else{
    event.preventDefault()
  }
}

function scrollToPosition(to) {
    /*
        window.scroll({
        top: to -80,
        behavior: "smooth",
     })
    */

    smoothScrollTo(0,to,1300)
}


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };