'use strict';

import { cupomDesconto } from "./cupomDesconto";

class cliente {
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome) {
        this.#nome = nome;
        this.#cupom = new cupomDesconto();
    }
    getBeneficios() {
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGasto(valor) {
        this.#gastosAcumulados += valor;
    }
}

const clienteNovo = new cliente('Abigail');
clienteNovo.setGasto(2000)
clienteNovo.getBeneficios();
//console.log(clienteNovo);