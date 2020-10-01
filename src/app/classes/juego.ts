export abstract class Juego {

    public gano = false;


    constructor(gano?: boolean) {
        if (gano) {
            this.gano = gano;
        }

    }

    public abstract verificar(): boolean;

    public retornarAyuda() {

        return 'NO hay Ayuda definida';
    }
}
