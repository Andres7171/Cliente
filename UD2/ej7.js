let numero = parseInt(
  prompt("Dime uno numero para crear una piramide de asteriscos"),
);
let piramide=""
let contenido=document.createElement('p')
for (let i = 0; i < numero; i++) {
    for (let j = 0; j <= i; j++) {
        piramide+="*"
    }
    piramide+="\n"
    
}
console.log(piramide)
