let selectProductos=document.getElementById('productSelect')
let lista=document.getElementById('productoList')
let productos=[]
let total=0
let totalProductos=document.getElementById('totalProductos')
let totalImporte=document.getElementById('importeTotal')
let media=0
let resumen=document.querySelector('.summary')



fetch('./productos (2).json').then(response=>{
    return response.json()
})
.then(data=>{
    productos=data.productos
    console.log(data)
    productos.map((producto)=>{
    let option=document.createElement('option')
        option.textContent=`${producto.nombre} - ${producto.precio}$`
        option.value=producto.id
        selectProductos.appendChild(option)
})
})

selectProductos.addEventListener('change',(event)=>{
    event.preventDefault()

    if(lista.lastChild){
        lista.lastChild.classList.remove('nuevo-producto-rojo')
    }
    let productoSeleccionado=productos.find(
        producto=> producto.id==event.target.value
    )

    let li=document.createElement('li')
    li.classList.add('product-item')
    li.dataset.id=productoSeleccionado.id
    li.dataset.pvp=productoSeleccionado.precio
    

    let div=document.createElement('div')
    div.classList.add('product-info')

    let spanNombre=document.createElement('span')
    spanNombre.classList.add('product-name')
    spanNombre.textContent=productoSeleccionado.nombre

    let spanPrecio=document.createElement('span')
    spanPrecio.classList.add('product-price')
    spanPrecio.textContent=productoSeleccionado.precio+'$'

    div.appendChild(spanNombre)
    div.appendChild(spanPrecio)

    li.appendChild(div)
    li.classList.add('nuevo-producto-rojo')

    lista.appendChild(li)

    selectProductos.value=''
    totalImporte.textContent=(parseFloat(totalImporte.textContent)+productoSeleccionado.precio).toFixed(2)
    totalProductos.textContent=parseInt(totalProductos.textContent)+1 
    let media=parseFloat(totalImporte.textContent)/parseInt(totalProductos.textContent)
    console.log(media.toFixed(2))

})

resumen.addEventListener('dblclick',()=>{
    lista.innerHTML=''
    totalImporte.textContent=0.00
    totalProductos.textContent=0
})



