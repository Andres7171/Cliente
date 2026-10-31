let boton = document.getElementById("startBtn");


boton.addEventListener("click", () => {
  let usuario = parseInt(prompt("Dime el valor inicial del contador"));
 
    console.log(usuario)
    let intervalo = setInterval(() => {
        usuario=usuario-1
        console.log(usuario);
        
        if(usuario==0){
            clearInterval(intervalo)
            let aleatorio=parseInt(Math.random()*4)+1
            let espera=setTimeout(()=>{
                let dias=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]
                let fecha=new Date()
                let dia=dias[fecha.getDay()]
                let hora=fecha.getHours()
                let minutos=String(fecha.getMinutes())
                let mensaje="Hoy es: "+dia+" a las "+hora+":"+minutos+". Nos vemos mañana"
                console.log(mensaje)
                alert(mensaje)
            },aleatorio*1000)
        }
    }, 1000);
  
});
