import { Juego } from '../classes/juego';

export class JuegoAgilidad extends Juego {
    primerNumero: number;
    operador: number;
    segundoNumero: number;
    resultado: number;
    respuesta = 0;


    constructor(gano?: boolean) {
        super(gano);
        this.primerNumero = Math.floor(Math.random() * 30);
        this.segundoNumero = Math.floor(Math.random() * 30);
        this.operador = Math.floor(Math.random() * 4);

    }

    verificar(): boolean {
        return true;
    }

    realizarCuenta(): number {
        let retorno = 0;

        if (this.operador === 0) {
            retorno = this.primerNumero + this.segundoNumero;
        }
        else if (this.operador === 1) {
            retorno = this.primerNumero - this.segundoNumero;

        }
        else if (this.operador === 2) {
            retorno = this.primerNumero * this.segundoNumero;
        }
        else if (this.operador === 3) {
            retorno = this.primerNumero / this.segundoNumero;

        }
        return retorno;
    }
}
