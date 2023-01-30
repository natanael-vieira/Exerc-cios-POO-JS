'use strict'


class Musica {
    static formato = 'mp3';
    #titulo; // Sempre que tiver um # na frente da propriedade ele define que esta propriedade está privada
    #duracao;
    constructor(titulo, duracao) {
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
}

const musica1 = new Musica('Minha musica', 190);
console.log(musica1.formato);
console.log(Musica.formato);

//###################################################
class Produto {
    static GRANDE = 10;
    static MEDIO = 5;
    static MEDIO = 1;
    codigo;
    titulo;
    valor;
    constructor (codigo, titulo, valor, tamanho) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

const p1 = new Produto(337, "Meu Produto", 54, Produto.GRANDE);
console.log(p1); /* Neste caso eu deveria utilizar a classe e não o 
produto que foi criado para acessar as informações ocultas. Podemos considerar
ela como uma constante, que não será mudada, pois neste caso de classes não tenho
como criar uma variável let ou const dentro do escopo da classe.*/ 