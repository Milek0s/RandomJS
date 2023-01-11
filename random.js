const idFirst = document.querySelector('#number1')
const idSecound = document.querySelector('#number2')
const button = document.querySelector('.button')
const idEquals = document.querySelector('.equals')

function random(first,secound){
    let equals = 1+Math.floor((Math.random()*(secound-first))+first);
    //console.log(equals)
    return(equals)
}
function download(){
    let first = idFirst.value
    let valueFirst = Number(first)
    //console.log(first)

    let secound = idSecound.value
    let valueSecound = Number(secound)
    //console.log(secound)
    if(valueFirst>valueSecound)
        idEquals.innerHTML = random(valueFirst,valueSecound)
    else
        idEquals.innerHTML = random(valueSecound,valueFirst)
}
download()
button.addEventListener('click',download)