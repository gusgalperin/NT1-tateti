class Jugador{
    constructor(letra) {
        this._letra = letra;
        this._puntaje = 0;
        this._multiplicador = this.getMultiplicador();
    }

    getMultiplicador(){
        if(this._letra == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    gano(){
        this._puntaje += 1;
    }
}