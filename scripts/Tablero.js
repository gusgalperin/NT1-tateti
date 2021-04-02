class Tablero{
    constructor() {
        this.iniciar();
    }

    registrarJugada(btn, quienJugo){
        let fila = btn[0];
        let columna = btn[1];

        this._tablero[fila][columna] = quienJugo._multiplicador;

        let bloque = this.getCasillaElem(fila, columna);
        bloque.getElementsByClassName('content')[0].innerText = quienJugo._letra;

        this.disableElem(bloque, true);

        // bloque.classList.add('ocupado');
    }

    evaluarFinalDelJuego(multiplicador){
        let final = {
            esFinal: false,
            hayGanador: false,
            esEmpate: false,
            jugadaGanadora: []
        };

        let jugadaGanadora = this.evaluarFilasYColumnas(multiplicador);

        if(jugadaGanadora == null){
            jugadaGanadora = this.evaluarDiagonales(multiplicador);
        }

        if(jugadaGanadora != null){
            final.esFinal = true;
            final.hayGanador = true;
            final.jugadaGanadora = jugadaGanadora;
        }
        else if(!this.hayCasillasLibres()){
            final.esFinal = true;
            final.esEmpate = true;
        }

        return final;
    }

    evaluarFilasYColumnas(multiplicador){
        let sumaFila;
        let sumaColumna;

        for (let i = 0; i<3;i++){
            sumaFila = 0;
            sumaColumna = 0;

            for (let j = 0; j<3; j++){
                sumaFila += this._tablero[i][j];
                sumaColumna += this._tablero[j][i];
            }

            if(sumaFila * multiplicador == 3 ){
                return [i+'0', i+'1', i+'2'];
            }

            if(sumaColumna * multiplicador == 3 ){
                return ['0'+i, '1'+i, '2'+i];
            }
        }

        return null;
    }

    evaluarDiagonales(multiplicador){
        let sumaDiagonal1 = this._tablero[0][0] + this._tablero[1][1] + this._tablero[2][2];
        let sumaDiagonal2 = this._tablero[0][2] + this._tablero[1][1] + this._tablero[2][0];

        if(sumaDiagonal1 * multiplicador == 3){
            return ['00','11','22'];
        }

        if(sumaDiagonal2 * multiplicador == 3){
            return ['02','11','20'];
        }

        return null;
    }

    hayCasillasLibres(){
        let hayBloqueLibre = false;

        let i = 0;
        let j = 0;

        while (i < 3  && !hayBloqueLibre){
            j = 0;
            while (j < 3 && !hayBloqueLibre){

                if(this._tablero[i][j] == 0){
                    hayBloqueLibre = true;
                }
                else{
                    j++;
                }
            }

            i++;
        }

        return hayBloqueLibre;
    }

    mostrarJugadaGanadora(jugadaGanadora){
        for (let i = 0; i < 3; i++) {
            document.getElementById('btn_' + jugadaGanadora[i]).classList.add('jugadaGanadora');
        }

        this.disable(true);
    }

    mostrarEmpate(){
        this.disable(true);
    }

    iniciar(){
        this._tablero = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        for (let i = 0; i<3;i++){
            for (let j = 0; j<3; j++){
                let elem = this.getCasillaElem(i, j);
                elem.classList.remove('jugadaGanadora');
                elem.classList.remove('ocupado');
                elem.getElementsByClassName('content')[0].innerText = '';
                this.disableElem(elem, false);
            }
        }
    }

    getCasillaElem(i, j){
        return document.getElementById('btn_' + i + j);
    }

    disable(disable){
        for (let i = 0; i<3;i++){
            for (let j = 0; j<3; j++){
                let elem = this.getCasillaElem(i, j);
                this.disableElem(elem, disable);
            }
        }
    }

    disableElem(elem, disable){
        if(disable){
            elem.classList.add('ocupado');
        }
        else{
            elem.classList.remove('ocupado');
        }
    }
}