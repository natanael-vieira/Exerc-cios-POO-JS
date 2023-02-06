'use strict';

class Musica {
    static formato = 'mp3';
    #titulo;
    #duracao;
    constructor(titulo, duracao) {
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
    static converteSegundosEmMinutos(duracao) {
        const min = Math.floor(duracao / 60);
        let seg = duracao % 60;
        if (seg < 10 && seg > 0) {
            seg = `0${duracao % 60}`;
        } else if (seg < 10) {
            seg = '00';
        }
        return `${min}:${seg}`;
    }
    getDuracao() {
        return this.#duracao;
    }
}

const musica1 = new Musica('Minha música', 360);
//console.log(musica1.converteSegundosEmMinutos(musica1.getDuracao())); // Eu só conseguiria utilizar esta forma para acessar a função converteSegundosEmMinutos() se ela não estiver em static, caso esteja vai dar erro no console.
console.log(Musica.converteSegundosEmMinutos(musica1.getDuracao()));


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


const prod = new Produto('Meu produto', 10, 3, 2, 80);
prod.volumeProduto;
console.log(prod.parcelaValor(2))