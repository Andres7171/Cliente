// 1. Selección de elementos del DOM
const valX = document.getElementById('val-x');
const valY = document.getElementById('val-y');
const zonaDibujo = document.getElementById('zona-dibujo');

// 2. Variables de estado
let desbloqueado = false;
const TARGET_X = 500;
const TARGET_Y = 500;
let letra=''
let cont=0
document.addEventListener('mousemove',(event)=>{
    zonaDibujo.style.backgroundColor=''
    valX.textContent=event.clientX
    valY.textContent=event.clientY
    if(parseInt(event.clientX)==500 && parseInt(event.clientY)==500){
        cont=1
        zonaDibujo.style.backgroundColor='lightgreen'
        document.addEventListener('keyup',(event)=>{
            letra=event.key
            if(cont==1){
              zonaDibujo.textContent+=letra 
               return
            }
            
            
        })
    }
})