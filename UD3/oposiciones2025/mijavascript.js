let divAmbitos=document.querySelectorAll('input')
let lista = document.querySelector('.framework-lista')
let titulo=document.getElementById('resultado').firstElementChild
let front;
let back;
let frameworks=[]
let frFront=[]
let frBack=[]
fetch('./frameworks.json').then(response=>response.json())
.then(data=>{
    frameworks=data
    frameworks.map(fr=>{
        if(fr.ambito=='Frontend'){
            frFront.push(fr)
        }else{
            frBack.push(fr)
        }
    })
})
divAmbitos.forEach(child=>{
    if(child.value=='Frontend'){
        front=child
    }else if(child.value=='Backend'){
        back=child
    }
})

document.addEventListener('change',()=>{
    lista.innerHTML=''
    if(front.checked){
        titulo.textContent = 'Frameworks (Frontend)'
        frFront.forEach(fr=>{
            let lisItem=document.createElement('li')
            lisItem.textContent=`${fr.framework}[${fr.lenguaje}]`
            lista.appendChild(lisItem)
        })
    }else if(back.checked){
        titulo.textContent = 'Frameworks (Backend)'
        frBack.forEach(fr=>{
            let lisItem=document.createElement('li')
            lisItem.textContent=`${fr.framework}[${fr.lenguaje}]`
            lista.appendChild(lisItem)
        })
    }
})
