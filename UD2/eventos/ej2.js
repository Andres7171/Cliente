let x = document.getElementById('x')
let y=document.getElementById('y')


document.addEventListener('mousemove',(event)=>{
    let posicion=event.clientX
    x.textContent=posicion
})
document.addEventListener('mousemove',(event)=>{
    let posicion=event.clientY
    y.textContent=posicion
})