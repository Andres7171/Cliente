
function aleatorio(max) {
    return Math.floor(Math.random() * (max + 1))
}

function colorAleatorio() {
    return 'rgb(' + aleatorio(255) + ',' + aleatorio(255) + ',' + aleatorio(255) + ')'
}

for (let i = 0; i < 2000; i++) {
    let cuadrado = document.createElement('div')
    cuadrado.className = 'cuadrado'
    cuadrado.style.backgroundColor = colorAleatorio()
    cuadrado.style.left = aleatorio(window.innerWidth) + 'px'
    cuadrado.style.top = aleatorio(window.innerHeight) + 'px'
    document.body.appendChild(cuadrado)
}
