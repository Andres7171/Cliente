const tareas = [
  "Estudiar JavaScript",
  "Hacer ejercicio",
  "Comprar víveres",
  "Llamar al médico",
  "Limpiar la casa",
];

console.log([...tareas].sort())
console.log([...tareas].reverse())
console.log([...tareas].sort().reverse())
console.log(
    [...tareas].sort((a,b)=>{
    return a.length-b.length
})
)

console.log(
    [...tareas].sort((a,b)=>{
    return a.length-b.length
}).reverse() 
)