let numero=prompt('Dime un numero y te digo el factorial')
if(numero===null){
    alert('eso no era un numero lo sientooo')
}else{
    let factorial=1
    for(let i =1;i<=numero;i++){
        factorial=factorial*i
    }
    alert(`el factorial de ${numero} es ${factorial}`)
}