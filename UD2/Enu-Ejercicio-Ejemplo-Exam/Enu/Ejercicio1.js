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

            },aleatorio)
        }
    }, 1000);
  
});
