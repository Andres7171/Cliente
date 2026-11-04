let valorInicial=parseInt(prompt('Dime el valor inicial del contador')) 
let boton=document.getElementById('startBtn')
let mensaje=''
let date=new Date()
let semana=['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
boton.addEventListener('click',()=>{
    let intervalo=setInterval(() => {
        console.log(valorInicial)
        valorInicial--
        if(valorInicial<0){
            clearInterval(intervalo)
            let aleatorio=Math.floor((Math.random()*4)+1)
            let time=setTimeout(() => {
                mensaje=`Hoy es ${semana[date.getDay()]} a las ${date.getHours()}:${date.getMinutes()}.Nos vemos mañana`
                console.log(mensaje)
                alert(mensaje)
            }, aleatorio*1000);
           
        }

    }, 1000);
})