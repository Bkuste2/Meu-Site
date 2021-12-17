const btnMobile = document.querySelector("#btn-mobile")

const nav = document.querySelector("#nav")

const desaparecer = document.querySelector(".desaparecer")

const button = document.getElementById("btn-mobile")

button.addEventListener("click", () =>{
    nav.classList.toggle('active')
    desaparecer.classList.toggle('display')
});

desaparecer.addEventListener('click', function(){
    desaparecer.classList.remove('display')
    nav.classList.remove("active")  
});



    





