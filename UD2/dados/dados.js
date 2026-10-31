// VARIABLES GLOBALES a UTILIZAR
let nombre_j1, nombre_j2;

let tiradas_j1 = 0;
let tiradas_j2 = 0;

let puntos_j1 = 0;
let puntos_j2 = 0;

let contador_partidas = 0;
let infoPartida = null;

let ganador = null;
let perdedor = null;

let jugadores = new Set();
jugadores.add("JNK");
jugadores.add("kjsa");

let resultados = [];

let estadisticas = document.getElementById("idEstadisticas");

class Partida {
  numero_partida;
  nombre_j1;
  nombre_j2;
  puntos_j1;
  puntos_j2;
  ganador;
  perdedor;

  constructor(
    numero_partida,
    nombre_j1,
    nombre_j2,
    puntos_j1,
    puntos_j2,
    ganador,
    perdedor,
  ) {
    this.numero_partida = numero_partida;
    this.nombre_j1 = nombre_j1;
    this.nombre_j2 = nombre_j2;
    this.puntos_j1 = puntos_j1;
    this.puntos_j2 = puntos_j2;
    this.ganador = ganador;
    this.perdedor = perdedor;
  }
  getPuntosJ1() {
    return this.puntos_j1;
  }
  setPuntosJ1(puntos) {
    this.puntos_j1 = puntos;
  }

  getPuntosJ2() {
    return this.puntos_j2;
  }
  setPuntosJ2(puntos) {
    this.puntos_j2 = puntos;
  }
  info() {
    return "Este juego ha sido creado por Andres";
  }
  #hola() {
    return "hola";
  }
  toString() {
    return "Partido entre " + this.nombre_j1 + "y " + this.nombre_j2;
  }
  valueOf() {
    if (this.puntos_j1 > this.puntos_j2) {
      return this.puntos_j1;
    } else {
      return this.puntos_j2;
    }
  }
}

function iniciar() {
  if (validarInformacionInicial() == false) {
    return false;
  }

  //Iniciamos contador de partidas
  contador_partidas = contador_partidas + 1;
  ganador = null;
  perdedor = null;
  document.getElementById("idBotonIniciar").setAttribute("disabled", "true");
  document.getElementById("dadoJ1").src = "img/0.png";
  document.getElementById("dadoJ2").src = "img/0.png";
  puntos_j1 = puntos_j2 = 0;

  // Recogida de valores
  nombre_j1 = document.getElementById("idInputNombreJ1").value;
  nombre_j2 = document.getElementById("idInputNombreJ2").value;
  tiradas_j1 = document.getElementById("idNumTiradas").value;
  tiradas_j2 = tiradas_j1;

  document.getElementById("idPuntuacionJ1").innerHTML = "PUNTUACIÓN: - 00 -";
  document.getElementById("idPuntuacionJ2").innerHTML = "PUNTUACIÓN: - 00 -";

  //Empieza el juego!!!
  // Cargar información en el tablero de los jugadores
  document.getElementById("idTablero").classList.remove("ocultar");

  document.getElementById("idNombreJ1").innerHTML = `JUGADOR 1 : ${nombre_j1}`;
  document.getElementById("idNombreJ2").innerHTML = `JUGADOR 2 : ${nombre_j2}`;

  document.getElementById("idBotonTirarJ1").removeAttribute("disabled");
  document.getElementById("idBotonTirarJ2").removeAttribute("disabled");

  document.getElementById("tiradasJ1").innerHTML =
    "TE QUEDAN " + tiradas_j1 + " TIRADAS";
  document.getElementById("tiradasJ2").innerHTML =
    "TE QUEDAN " + tiradas_j2 + " TIRADAS";
}

function tiradaJ1() {
  // Actualizar Dado
  let aleatorio = generarNumeroAleatorio();
  document.getElementById("dadoJ1").src = `img/${aleatorio}.png`;
  puntos_j1 = puntos_j1 + aleatorio;

  //Actualizar puntuación
  document.getElementById("idPuntuacionJ1").innerHTML =
    `PUNTUACIÓN: ${puntos_j1}`;

  //Actualizar número de tiradas
  tiradas_j1 = parseInt(tiradas_j1) - 1;
  document.getElementById("tiradasJ1").innerHTML =
    `TE QUEDAN ${tiradas_j1} TIRADAS`;

  // Comprobar si existe algún ganador
  comprobarGanador();
}

function tiradaJ2() {
  // Actualizar Dado
  let aleatorio = generarNumeroAleatorio();
  document.getElementById("dadoJ2").src = `img/${aleatorio}.png`;

  //Actualizar puntuación
  puntos_j2 = puntos_j2 + aleatorio;
  document.getElementById("idPuntuacionJ2").innerHTML =
    `PUNTUACIÓN: ${puntos_j2}`;

  //Actualizar número de tiradas
  tiradas_j2 = tiradas_j2 - 1;
  document.getElementById("tiradasJ2").innerHTML =
    `TE QUEDAN ${tiradas_j2} TIRADAS`;

  // Comprobar si existe algún ganador
  comprobarGanador();
}

function comprobarGanador() {
  if (tiradas_j1 == 0) {
    // ¿Ha terminado jugador 1?
    document.getElementById("idBotonTirarJ1").setAttribute("disabled", "true");
  }

  if (tiradas_j2 == 0) {
    // ¿Ha terminado jugador 2?
    document.getElementById("idBotonTirarJ2").setAttribute("disabled", "true");
  }

  if (tiradas_j2 == 0 && tiradas_j1 == 0) {
    // ¿Han terminado ambos jugadores?
    document.getElementById("idBotonIniciar").removeAttribute("disabled");
    if (puntos_j1 > puntos_j2) {
      alert(
        `Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!! ${puntos_j1} puntos`,
      );

      ganador = nombre_j1;
      perdedor = nombre_j2;
    } else if (puntos_j1 < puntos_j2) {
      alert(
        `Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!! ${puntos_j2} puntos`,
      );

      ganador = nombre_j2
      perdedor = nombre_j1
    } else {
      alert(`Partida Finalizada, ¡¡¡EMPATEEEE!!! ${puntos_j1} puntos`)
	  ganador='empate';
	  perdedor='empate'
    }

    document.getElementById("idBotonIniciar").removeAttribute("disabled");
    mostrarJugadores();
    //gestionJugadores();

    //gestionPuntuacion();
    let partida = new Partida(
      nombre_j1,
      nombre_j2,
      puntos_j1,
      puntos_j2,
      ganador,
      perdedor,
    );
    console.log(partida);

    let puntos = puntos_j1 + "-" + puntos_j2;
    let informacionResultado = [puntos, ganador, perdedor];

    resultados.push(informacionResultado);

    mostrarResultados(informacionResultado);
  }
}
/********************************************************
*  APARTADO 1 : Implementar reloj del juego
	-> Mostrar en la parte superior del juego la fecha actual del sistema. Debe ser actualizada cada segundo. 
*******************************************************/
let reloj = document.getElementById("idReloj");

let tiempo = setInterval(() => {
  let fecha = new Date();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = String(fecha.getSeconds()).padStart(2, "0");
  reloj.textContent = horas + ":" + minutos + ":" + segundos;
}, 1000);

/********************************************************
*  APARTADO 2 : generarNumeroAleatorio
	-> Implementar la función para generar un número que simule el lanzamiento de un dado. 
*******************************************************/

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 6);
}

/********************************************************
 *  APARTADO  3  : Listado de jugadores
 *******************************************************/
let listadoJugadores = document.getElementById("idNombreJugadores");

function mostrarJugadores() {
  listadoJugadores.textContent = "";
  jugadores.forEach((jugador) => {
    listadoJugadores.textContent += jugador + ",";
  });
}

/********************************************************
 *  APARTADO  4  : Mostrar resultados
 *******************************************************/

function mostrarResultados(info) {
  let row = document.createElement("tr");
  for (let item of info) {
    let content = item;
    row.innerHTML += "<td>" + content + "</td>";
  }
  row.className = "mostrar";
  row.addEventListener("click", () => {
    row.remove();
  });
  estadisticas.appendChild(row);
}

/*************************************************************
 ***********************************************************
 ***********************************************************/
function validarInformacionInicial() {
  if (document.getElementById("idInputNombreJ1").value == false) {
    alert("Debes indicar el nombre del Jugador 1!");
    return false;
  }
  if (document.getElementById("idInputNombreJ2").value == false) {
    alert("Debes indicar el nombre del Jugador 2!");
    return false;
  }

  if (document.getElementById("idNumTiradas").value == false) {
    alert("Debes indicar el Número de tiradas!");
    return false;
  }
  if (jugadores.has(document.getElementById("idInputNombreJ1").value)) {
    alert("Jugador ya existente");
    return false;
  } else {
    jugadores.add(document.getElementById("idInputNombreJ1").value);
  }

  if (jugadores.has(document.getElementById("idInputNombreJ2").value)) {
    alert("Jugador ya existente");
    return false;
  } else {
    jugadores.add(document.getElementById("idInputNombreJ2").value);
  }

  let tiradas = parseInt(document.getElementById("idNumTiradas").value);
  if (isNaN(tiradas) || (!isNaN(tiradas) && tiradas <= 0)) {
    alert("el número de tiradas debe ser superior a 0!");
    return false;
  }

  return true;
}
