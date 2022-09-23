const $ = selector => document.querySelector(selector)
const peso = $('#peso')
const altura = $('#altura')
const btnCalcular = $('#calcular')
const btnReiniciar = $('#reiniciar')
const screenResult = $('.result')
const screenPesoIdeal = $('.peso-ideal')

let imc,pesoIdealMayor,pesoIdealMenor

btnCalcular.addEventListener('click', ()=>calculadora(peso.value,altura.value))
btnReiniciar.addEventListener('click', reiniciar)

function reiniciar(){
    location.reload()
}

function calculadora(peso,altura){
   imc = (peso/(altura**2)).toFixed(2)
   pesoIdealMayor = (24.9*(altura**2)).toFixed(2)
   pesoIdealMenor = (18.5*(altura**2)).toFixed(2)
   screenResult.innerHTML= imc
   screenColor(imc)
   calcularPesoIdeal(pesoIdealMayor,pesoIdealMenor)
}

function calcularPesoIdeal(pesoMaximo, pesoMininmo){
    screenPesoIdeal.innerHTML = `Su peso ideal deberia estar entre ${pesoMininmo}kg y ${pesoMaximo}kg`
}

function screenColor(imc){
    if(imc<18.5){
        screenResult.style.background = '#93b4d7'
    }else if(imc>=18.5 && imc<=24.9){
        screenResult.style.background= '#8ec69f'
    }else if(imc>=25 && imc<=29.9){
        screenResult.style.background= '#f9d549'
    }else if(imc>=30 && imc<=34.9){
        screenResult.style.background= '#e4995f'
    }else screenResult.style.background= '#d65a5a'
}