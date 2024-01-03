
const  jugadores = []

class Jugador {
    constructor (nombre,numeroCamiseta, edad, lesionado) {
        this.nombre = nombre
        this.numeroCamiseta = numeroCamiseta
        this.edad = edad
        this.lesionado = lesionado
    }

}

jugadores.push(new Jugador ("Juan", 77, 24, false))
jugadores.push(new Jugador ("Juanu", 22, 17, true))
jugadores.push(new Jugador ("Juanete", 33, 17, false))
jugadores.push(new Jugador ("Juanchute", 44, 21, true))
jugadores.push(new Jugador ("Juancito", 55, 20, false))
jugadores.push(new Jugador ("Juano", 66, 20, true))

const filtroJugadores = (equipo,edad) => equipo.filter(array => array.edad == parseInt(edad))  

for(let i = 0; i < 5;i++) {
    let resultado = filtroJugadores(jugadores, prompt("Ingrese una edad para buscar entre los jugadores."))
    if (resultado.length > 0) {
        resultado.forEach(jugador => { 
            alert(`Nombre: ${jugador.nombre}, Edad: ${jugador.edad}`);
            });
      } else {  
        alert("No se encontraron jugadores con la edad ingresada.");
      } 
};