class TurnoActual{
    constructor(jugador1, jugador2) {
        this._jugador1 = jugador1;
        this._jugador2 = jugador2;

        let quienJuega = this.sortearQuienArranca(jugador1, jugador2);

        this._quienEmpezo = quienJuega;
        this._turnoActual = quienJuega;

        this.mostrarTurno();
    }

    cambioTurno(){
        if(this._turnoActual._letra == this._jugador1._letra){
            this._turnoActual = this._jugador2;
        }
        else{
            this._turnoActual = this._jugador1;
        }

        this.mostrarTurno();
    }

    finalPartida(empate, ganador){
        if(empate){
            document.getElementById('ganador').innerText = 'EMPATE :S';
        }
        else{
            document.getElementById('ganador').innerText = 'GANO: ' + ganador._letra;
        }

        document.getElementById('turnoActualContainer').hidden = true;
        document.getElementById('ganadorContainer').hidden = false;
    }

    reiniciar(){
        document.getElementById('ganadorContainer').hidden = true;

        if(this._quienEmpezo._letra == this._jugador1._letra){
            this._quienEmpezo = this._jugador2;
            this._turnoActual = this._jugador2;
        }
        else{
            this._quienEmpezo = this._jugador1;
            this._turnoActual = this._jugador1;
        }

        document.getElementById('turnoActualContainer').hidden = false;
        this.mostrarTurno();
    }

    mostrarTurno(){
        document.getElementById('turnoActual').innerText = this._turnoActual._letra;
    }

    sortearQuienArranca(jugador1, jugador2){
        return jugador1;
    }
}