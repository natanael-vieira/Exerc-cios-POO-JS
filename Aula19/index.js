import {CupomDesconto} from "./cupomDesconto.js";

'use strict';

class cliente {
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome) {
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }
    getBeneficios() {
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGasto(valor) {
        this.#gastosAcumulados += valor;
    }
}

const clienteNovo = new cliente('Abigail');
clienteNovo.setGasto(2000);
clienteNovo.setGasto(2000);
clienteNovo.setGasto(7000);
clienteNovo.getBeneficios();
//console.log(clienteNovo);