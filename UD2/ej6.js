let notas = prompt("Introduce las notas separadas por comas: ")
notas = notas.split(",")
if(notas.includes("10")){
    alert("SI")
}else{
    alert("NO")
}

