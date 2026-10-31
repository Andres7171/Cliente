const inventario = [
  "Laptop",
  "Mouse",
  "Teclado",
  "Monitor",
  "Tablet",
  "Mouse",
  "Auriculares",
];

if(Array.isArray(inventario)){
    console.log('Es un array')
}else{
    console.log('no es un aray')
}

if(inventario.includes('Tablet')){
    console.log('Hay una Tablet en el inventario')
}else{
    console.log('No hay una Tablet en nuestri inventario , lo siento')
}

console.log(`El primer Mouse que tenemos esta en la estanteria numero ${inventario.indexOf('Mouse')+1} y en la ${inventario.indexOf('Mouse')} del Array `)
console.log(`La segunda aparicion de Mouse en el array es en la posicion ${inventario.indexOf('Mouse',inventario.indexOf('Mouse')+1)}`)