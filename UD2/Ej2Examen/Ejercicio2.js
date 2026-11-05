//Ejercicio 1 funcion ------------------------------------------------------------
function secuenciaAcumulada() {
  let array = [];
  let arrayAcumulado = [];
  let cont = 8;
  for (let i = 0; i < 8; i++) {
    let aleatorio = Math.floor(Math.random() * 10 + 1);
    array.push(aleatorio);
  }
  console.log(array);

  array.forEach((element,index)=>{
    let subarray = array.slice(0, index+1);
    let resultado = 0;
    subarray.forEach((element) => {
      resultado += element;
    });
    arrayAcumulado.push(resultado);
  })
  console.log(arrayAcumulado)
}
secuenciaAcumulada();

/* --------------------------------------------------------------------------- */
//terminado


// --- VARIABLE GLOBAL ---
const historico = new Map();

// --- SELECTORES ---
const btnIniciar = document.getElementById("btnIniciar");
const inputInicial = document.getElementById("valorInicial");
const inputFinal = document.getElementById("valorFinal");
const estadoTexto = document.getElementById("estado");
let date=new Date()
// --- LÓGICA ---

btnIniciar.addEventListener('click',()=>{

    if(inputInicial.value > inputFinal.value){
        console.error('El valor inicial debe ser menor al final')
    }else{

        let contador=parseInt(inputInicial.value)
        let intervalo=setInterval(() => {
            historico.set('identificador',[`${date.getHours()}:${date.getMinutes()}`,inputInicial.value,inputFinal.value])
            console.log(contador)
            contador++
            if(contador>parseInt(inputFinal.value)){
                clearInterval(intervalo)
                console.log(historico)
                let completado=setTimeout(() => {
                    alert('Proceso completado con exito')
                }, 3000);
            }
        }, 1000);
        
    }
})

















/*
do {
  let inicial = parseInt(prompt("Dime un valor inicial para el contador"));
  let final = parseInt(prompt("Dime un valor final para el contador"));
} while (inicial > final);


let instervalo=setInterval(() => {
    
}, 1000);*/
