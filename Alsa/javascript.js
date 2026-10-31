let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let fechaIda = document.getElementById("fechaIda");
let fechaVuelta = document.getElementById("fechaVuelta");
let soloIda = document.getElementById("soloIda");

let boton = document.getElementById("boton");
let resOrigen = document.getElementById("resOrigen");
let resDestino = document.getElementById("resDestino");
let resFechaIda = document.getElementById("resFechaIda");
let resFechaVuelta = document.getElementById("resFechaVuelta");
let resSoloIda = document.getElementById("resSoloIda");

let fecha = new Date();
let mensajesError = "";
let validar = () => {
    mensajesError=''
  let fechaActual = new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    fecha.getDate(),
  );
  let valOrigenDestino = false;
  if (origen.value != "" && destino.value != "") {
    valOrigenDestino = true;
  } else {
    mensajesError += "Origen/Destino sin rellenar ";
  }

  let valFecha = false;
  if (fechaActual < new Date(fechaIda.value)) {
    valFecha = true;
  } else {
    mensajesError += "La fecha de ida es menor a la actual";
  }
  if (soloIda.checked == false) {
    if (fechaVuelta.value < fechaIda.value) {
      valFecha = false;
      mensajesError += "La fecha de vuelta es menor a la de ida";
    }
  }

  if (valFecha && valOrigenDestino) {
    return true;
  } else {
    return false;
  }
};

soloIda.addEventListener("change", () => {
  if (soloIda.checked) {
    fechaVuelta.disabled = true;
    resFechaVuelta.textContent='-'
  } else {
    fechaVuelta.disabled = false;
  }
});

boton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validar() == true) {
    resOrigen.textContent = origen.value;
    resDestino.textContent = destino.value;
    resFechaIda.textContent = fechaIda.value;
    if (fechaVuelta.disabled == false) {
      resFechaVuelta.textContent = fechaVuelta.value;
    }else{
        resFechaVuelta.value='-'
    }
    if (soloIda.checked) {
      resSoloIda.textContent = "Si";
    } else {
      resSoloIda.textContent = "No";
    }
    mensajesError = "";
  } else {
    alert(mensajesError);
  }
});
