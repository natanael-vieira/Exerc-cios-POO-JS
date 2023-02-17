'use strict';

class cupomDesconto {
    #desconto1 = 10;
    #desconto2 = 20;
    constructor() { }
    getDesconto(gastos) {
        if(gastos >= 100 && gastos <= 3000) {
            console.log(`Você tem direito a ${this.#desconto1}% de desconto`);
        } else if (gastos > 3000) {
            console.log(`Você tem direito a ${this.#desconto2}% de desconto`)
        } else {
            console.log('Infelizmente você não possui descontos no momento.')
        }
    }
}

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