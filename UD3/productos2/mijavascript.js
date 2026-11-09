let lista = document.querySelector(".product-list");
let productos = [];
fetch("./products.json")
  .then((response) => response.json())
  .then((data) => {
    productos = data.products;
    productos.map((producto) => {
        let productoNuevo=document.createElement('li')
        productoNuevo.textContent=producto.Name+'-'+producto.Price+'-->'+producto.Location
        lista.appendChild(productoNuevo)
    });
  });
