let x=document.getElementById('idInfoX')
let y=document.getElementById('idInfoY')

document.addEventListener('mousemove',(event)=>{
    let coorX=event.clientX
    let coorY=event.clientY
    x.textContent=coorX
    y.textContent=coorY
})