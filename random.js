const idFirst = document.querySelector('#number1')
const idSecound = document.querySelector('#number2')
const button = document.querySelector('.button')
const idEquals = document.querySelector('.equals')

function random(first,secound){
    let equals = Math.round((Math.random()*(secound-first))+first);
    return(equals)
}
function download(){
    let first = +idFirst.value
    let secound = +idSecound.value
    
    if(first>secound)
        idEquals.innerHTML = random(first,secound)
    else
        idEquals.innerHTML = random(secound,first)
}
download()
button.addEventListener('click',download)
