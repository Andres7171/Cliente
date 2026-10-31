let boton=document.getElementById('boton')

function aleatorio(max){
    return Math.floor((Math.random()*max)+1)
}

function colorAleatorio() {
    return 'rgb(' + aleatorio(255) + ',' + aleatorio(255) + ',' + aleatorio(255) + ')'
}

document.addEventListener('click',(e)=>{
    if(e.target!==boton){
        document.body.style.backgroundColor='white'
    }
})

boton.addEventListener('click',()=>{
    document.body.style.backgroundColor=colorAleatorio()
})