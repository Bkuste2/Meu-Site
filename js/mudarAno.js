const select = document.getElementById('selectAno');

select.addEventListener('click', e => e.preventDefault())

function mudarAno(){
    
    const select = document.getElementById("selectAno").value
    const todosCards = document.querySelectorAll(`.cards`)

    const arrayCards = Array.from(todosCards)
    const displayNone = card => card.style.display = "none"
    const displayBlock = card => card.style.display = "block"

    arrayCards.map(displayNone)

    if(select === "todos") arrayCards.map(displayBlock)
    
    else{
        let node;

        if(select == 1){
            node = document.querySelectorAll('[ ano="1"]')    
        }
        else if(select == 2){
            node = document.querySelectorAll('[ ano="2"]')
        }
        else{
            node = document.querySelectorAll('[ ano="3"]')
        }
        const array = Array.from(node)
        array.forEach(element => {
            element.style.display = "block"
        })
    }
    /* 
    if(select == 1){
        const node = document.querySelectorAll('[ ano="1"]')
        const array = Array.from(node)

        array.forEach(element => {
            element.style.display = "block"
        })
    }
    else if(select == 2){
        const node = document.querySelectorAll('[ ano="2"]')
        const array = Array.from(node)

        array.forEach(element => {
            element.style.display = "block"
        })
    }
    else if(select == 3){
        const node = document.querySelectorAll('[ ano="3"]')
        const array = Array.from(node)

        array.forEach(element => {
            element.style.display = "block"
        })
    }
    else
        arrayCards.map(displayBlock)
    */
}