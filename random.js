const idFirst = document.querySelector('#number1')
const idSecound = document.querySelector('#number2')
const button = document.querySelector('.button')
const idEquals = document.querySelector('.equals')

function random(first,secound){
    let equals = Math.round((Math.random()*(secound-first))+first);
    //console.log(equals)
    return(equals)
}
function download(){
    let first = +idFirst.value
    //console.log(first)

    let secound = +idSecound.value

    //console.log(secound)
    if(valueFirst>valueSecound)
        idEquals.innerHTML = random(first,secound)
    else
        idEquals.innerHTML = random(secound,first)
}
download()
button.addEventListener('click',download)
