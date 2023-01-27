'use strict'

class Financiamento {
    valorFinanciamento;
    taxaJuros;
    numero = 13; // Mesmo se eu definir um número para este atributo, se eu criar um atributo dela dentro do construtor, o que for atribuído dentro do construtor vai subescrever o valor de numero anteriormente atribuído
    constructor (valorFinanciamento, taxaJuros, numero) {
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
        this.numero = numero; // E o simples fato de eu criar um atributo dentro do construtor já vai anular o que foi definido anteriormente em 'numero'
    }
}

const fin = new Financiamento(10000,1);
const fin2 = new Financiamento(30000,3.5,35);

console.log(fin);
console.log(fin2);