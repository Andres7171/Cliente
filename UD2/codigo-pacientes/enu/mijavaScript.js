// Matriz de pacientes
const pacientes = [
    ["Antonio", "Perez Garcia", 44, "85kg", "12345678A"],
    ["Maria", "Lopez Martinez", 32, "62kg", "87654321B"],
    ["Carlos", "Gonzalez Ruiz", 28, "78kg", "23456789C"],
    ["Laura", "Rodriguez Sanchez", 51, "68kg", "34567890D"],
    ["Pedro", "Fernandez Diaz", 39, "92kg", "45678901E"],
    ["Ana", "Torres Jimenez", 25, "58kg", "56789012F"],
    ["Javier", "Moreno Alvarez", 47, "88kg", "67890123G"],
    ["Elena", "Navarro Romero", 36, "65kg", "78901234H"],
    ["David", "Hernandez Castro", 29, "76kg", "89012345I"],
];

let informacion = new Map()

function mostrar() {

    // Inicializamos variables
    informacion.set("edadSum", 0)
    informacion.set("total", pacientes.length)
    informacion.set("edadMin", 999)
    informacion.set("edadMax", -1)
    informacion.set("pesoTotal", 0)

    // Lógica de negocio
    pacientes.forEach(paciente => {
        const edad = paciente[2]
        const peso = parseInt(paciente[3]) // "85kg" -> 85

        informacion.set("edadSum", informacion.get("edadSum") + edad)
        informacion.set("pesoTotal", informacion.get("pesoTotal") + peso)

        if (edad < informacion.get("edadMin")) {
            informacion.set("edadMin", edad)
        }
        if (edad > informacion.get("edadMax")) {
            informacion.set("edadMax", edad)
        }
    });

    const total = informacion.get("total")

    // Mostrar resultados en la página
    idTotal.innerHTML = `<strong class="bonito">Total pacientes :</strong> ${informacion.get("total")}`
    idEdadProm.innerHTML = `<strong>Edad promedio :</strong> ${(informacion.get("edadSum") / total).toFixed(2)} años`
    idEdadMin.innerHTML = `<strong>Edad mínima :</strong> ${informacion.get("edadMin")} años`
    idEdadMax.innerHTML = `<strong>Edad máxima :</strong> ${informacion.get("edadMax")} años`
    idPesoProm.innerHTML = `<strong>Peso promedio :</strong> ${(informacion.get("pesoTotal") / total).toFixed(2)} kg`
}


function ordenado() {
    // Copia ordenada por edad (de menor a mayor) sin modificar el array original
    console.log(pacientes)
    copia=[...pacientes]
    console.log(copia.sort((a,b)=>{
    return a[2]-b[2]
   }))
}


document.getElementById("btnMostrar").addEventListener("click",mostrar)
document.getElementById("btnOrdenado").addEventListener("click",ordenado)