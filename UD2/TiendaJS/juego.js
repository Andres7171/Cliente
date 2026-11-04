let nombre;
let respuestas=[]
let puntos=0
let operacionActual;
let idIntervalo=null
let segundos=30
let reloj=document.getElementById('reloj')
let marcador=document.getElementById('marcador')
let resultados=document.getElementById('resultados')
marcador.textContent=puntos
reloj.textContent=segundos
do{
    nombre=prompt('Dime tu nombre')
}while(nombre==null || nombre.trim()==='')
nombre=nombre.trim()
nombre=nombre.charAt(0).toUpperCase()+nombre.slice(1)
console.log(nombre)

let saludo=document.getElementById('saludo')
saludo.innerHTML=`Bienvenido ${nombre}`
let fecha=''
let date=new Date()
let dias=['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
let meses= [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
fecha=`Hoy es ${dias[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`
let fechaIndex=document.getElementById('fecha')
fechaIndex.innerHTML=fecha

function generarOperacion(){
    let resultado=0
    let num1=Math.floor((Math.random()*10)+1)
    let num2=Math.floor((Math.random()*10)+1)
    let operadores=['+','-','*']
    let numOperador=Math.floor(Math.random()*3)
    console.log(numOperador)
    if(operadores[numOperador]=='+'){
        resultado=num1+num2
    }else if(operadores[numOperador]=='-'){
        resultado=num1-num2
    }else{
        resultado=num1*num2
    }
    let operacion=document.getElementById('operacion')
    let texto=`${num1} ${operadores[numOperador]} ${num2}`
    operacion.textContent=texto
    return {texto:texto,resultado:resultado}

}


let boton=document.getElementById('btnEmpezar')
boton.addEventListener('click',()=>{
    
    if(idIntervalo!==null){       
        return
    }
    reloj.style.color=''
    idIntervalo=1
    puntos=0
    respuestas=[]
    segundos=30
    let inputRes=document.getElementById('txtRespuesta')
    operacionActual= generarOperacion()
    inputRes.disabled=false
    let intervalo=setInterval(() => {
        segundos-=1
        reloj.textContent=segundos
        
        if(segundos<=5){
            reloj.style.color='red'
        }
        if(segundos==0){
            inputRes.disabled=true
            idIntervalo=null
            marcador.textContent=0
            clearInterval(intervalo)
            terminarPartdida()
        }
    }, 1000);
    
})
let formulario=document.getElementById('formRespuesta')
formulario.addEventListener('submit',(event)=>{
    event.preventDefault()
    let inputRes=document.getElementById('txtRespuesta')
    if(isNaN(parseInt(inputRes.value))){
        alert('Esa respuesta no es valida')

   }else{
    let correcta=false
    if(operacionActual.resultado===parseInt(inputRes.value)){
        correcta=true
        puntos++
    }
    respuestas.push({
        operacion:operacionActual,
        respuestaUsuario:parseInt(inputRes.value),
        correcta:correcta
    })
    marcador.textContent=puntos
    inputRes.value=''
    operacionActual=generarOperacion()
}

})

function terminarPartdida(){
    console.log(respuestas)
}
