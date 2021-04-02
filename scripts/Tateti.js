var _turnoActual;
var _tablero;
var _jugador1;
var _jugador2;
var _puntaje;

inicio();

function inicio(){
    _tablero = new Tablero();

    _jugador1 = new Jugador('X');
    _jugador2 = new Jugador('O');

    _turnoActual = new TurnoActual(_jugador1, _jugador2);
    _puntaje = new Puntaje(_jugador1, _jugador2);
}

function toco(btn){
    let quienJugo = _turnoActual._turnoActual;
    _tablero.registrarJugada(btn, quienJugo);
    _turnoActual.cambioTurno();
    evaluarGanador(quienJugo);
}

function evaluarGanador(quienJugo){
    let finalJuego = _tablero.evaluarFinalDelJuego(quienJugo._multiplicador);

    if(finalJuego.esFinal){
        if(finalJuego.hayGanador) {
            hayGanador(quienJugo, finalJuego.jugadaGanadora);
        }
        else if(finalJuego.esEmpate){
            hayEmpate();
        }
    }
}

function hayGanador(quienJugo, jugadaGanadora){
    quienJugo.gano();
    _tablero.mostrarJugadaGanadora(jugadaGanadora);
    _puntaje.setPuntajes(_jugador1, _jugador2);
    _turnoActual.finalPartida(false, quienJugo);
}

function hayEmpate(){
    _turnoActual.finalPartida(true, null);
    _tablero.mostrarEmpate();
}

function reiniciar(){
    _tablero.iniciar();
    _turnoActual.reiniciar();
}