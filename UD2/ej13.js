let jugar = () => {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    let comprobar = (numero) => {
        let intentos = 1;

        while (true) {
            if (isNaN(numero)) {
                alert('No tengo tiempo');
                return;
            }

            if (numero === numeroAleatorio) {
                alert('Acertaste en ' + intentos + ' intentos');
                return;
            }

            if (numero < numeroAleatorio) {
                alert('es mayor');
            } else {
                alert('es menor');
            }

            let entrada = prompt('ese no era, vuelve a probar');
            if (entrada === null) {
                alert('se canceló el juego');
                return;
            }

            numero = parseInt(entrada);
            intentos++;
        }
    };

    let entradaInicial = prompt('Dime un numero');
    if (entradaInicial === null) {
        alert('se canceló el juego');
        return;
    }

    let usuario = parseInt(entradaInicial);
    comprobar(usuario);

    let seguirJugando = confirm('quieres volver a jugar?');
    if(seguirJugando){
        jugar()
    }else{
        alert('ok chao')
    }
};

jugar()


3