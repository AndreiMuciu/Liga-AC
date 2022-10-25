'use strict'

const poza1 = document.querySelector('.poza1')
const poza2 = document.querySelector('.poza2')

poza1.addEventListener('click',()=>{
    poza2.style.display='block'
    poza1.style.display='none'
})

poza2.addEventListener('click',()=>{
    poza1.style.display='block'
    poza2.style.display='none'
})