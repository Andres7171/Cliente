const estudiantes = [
  "Ana García",
  "Luis Martínez",
  "María López",
  "Carlos Rodríguez",
  "Elena Sánchez",
  "Pedro Hernández",
];
console.log(estudiantes)
let grupoExtraido=estudiantes.slice(1,4)
console.log(grupoExtraido)

console.log(`${estudiantes.join('|')}`)

let primerEstudiante=estudiantes[0].split(' ')
console.log(primerEstudiante)