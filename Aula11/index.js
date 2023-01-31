'use strict'

class Produto {
    descricao;
    largura;
    altura;
    profundidade;
    valor;
    constructor(descricao, largura, altura, profundidade, valor) {
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }
    volumeProduto() {
        return this.largura * this.altura * this.profundidade;
    }
    parcelaValor(parcelas) {
        return this.valor / parcelas;
    }
}

const prod = new Produto('Primeiro produto', 10, 3, 2, 80);
console.log(prod)
console.log(prod.parcelaValor(4))