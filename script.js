function entrarMouse(){
    this.style.boxShadow = '0px 0px 5px blue'
}
function sairMouse(){
    this.style.boxShadow = ''
}

function digitar(...n){
    event.preventDefault()
    restultado.innerHTML += n
}

function clean(){
    event.preventDefault()
    restultado.innerHTML = ''
}

function resposta(){
    event.preventDefault()
    restultado.innerHTML = eval(restultado.innerHTML)
}

let restultado = document.getElementById('res')
let igual = document.getElementById('igual')
const botoes = document.querySelectorAll('.botao')

Array.from(botoes).forEach(function(evt){
    evt.addEventListener('mouseover', entrarMouse)
})
Array.from(botoes).forEach(function(evt){
    evt.addEventListener('mouseout', sairMouse)
})