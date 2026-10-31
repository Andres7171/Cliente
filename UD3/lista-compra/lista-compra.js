let boton = document.getElementById('boton')
let lista = document.getElementById('lista')
let cajaProducto=document.getElementById('cajaProducto')

boton.addEventListener('click',(event)=>{
    event.preventDefault()
    let nuevoProducto=document.createElement('li')
    nuevoProducto.textContent=cajaProducto.value
    lista.appendChild(nuevoProducto)

    let productos=[]
    let copia=Array.from(lista.children)
    copia.forEach(item=>{
        productos.push(item.textContent)
    })

    productos.sort()

    lista.innerHTML=''
    productos.forEach(producto=>{
        let nuevoProducto=document.createElement('li')
        nuevoProducto.textContent=producto
        lista.appendChild(nuevoProducto)
    })
    cajaProducto.value=''
})