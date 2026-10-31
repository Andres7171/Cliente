const futbolistas = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "Mbappé",
  "Haaland",
  "Lewandowski",
  "Benzema",
  "Salah",
  "De Bruyne",
  "Modrić",
];

futbolistas.forEach(futbolista => {
    console.log(`${futbolista} ${futbolistas.indexOf(futbolista)}`)
});

if(futbolistas.every(futbolista=>futbolista.length > 3)){
    console.log('Todos tienen mas de 3 caracteres')
}else{
    console.log('Hay alguno que no tiene mas de 3 caracteres')
}

if(futbolistas.some(futbolista=>futbolista[0]==='M')){
    console.log('Hay un futbolsta que empieza por M')
}else{
    console.log('No hay ningun futbolsta que empieza por M')
}

let mayuscula = futbolistas.map((futbolista)=>{
    return futbolista.toUpperCase()
})
console.log(mayuscula)

console.log(futbolistas.findIndex((futbolista)=>{
    if(futbolista.length>8) return futbolista
}))

console.log(futbolistas.find((futbolista)=>{
    if(futbolista.includes('z')) return futbolista
}))