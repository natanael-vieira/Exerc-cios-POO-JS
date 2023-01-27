'use strict'

class Financiamento {
    constructor (valorFinanciamento, taxaJuros) {
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
    }
}

const fin = new Financiamento();

console.log(fin);