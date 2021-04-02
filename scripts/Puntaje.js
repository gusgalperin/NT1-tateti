class Puntaje{
    constructor(jugador1, jugador2) {
        this.setPuntajes(jugador1, jugador2);
    }

    setPuntajes(jugador1, jugador2){
        document.getElementById('puntaje' + jugador1._letra).innerText = jugador1._puntaje;
        document.getElementById('puntaje' + jugador2._letra).innerText = jugador2._puntaje;
    }
}