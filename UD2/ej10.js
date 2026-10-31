let primo = (numero)=>{
    let cont=0
    if(numero<1 || numero >10000){
        console.log('No esta entre 1 y 10000')
    }
    for (let i = 1; i <=numero; i++) {
        if(numero%i===0){
            cont++
        }
        
    }
    if(cont<=2){
        return true;
    }else{
        return false
    }
}
