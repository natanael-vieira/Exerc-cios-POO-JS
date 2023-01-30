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
    static vermelho = 'RED'
    codigo;
    titulo;
    valor;
    constructor (codigo, titulo, valor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
    }
}

class Disciplina {
    codigo;
    nome;
    nota;
    constructor(codigo, nome, nota) {
        this.codigo = codigo;
        this.nome = nome;
        this.nota = nota;
    }
}

const d1 = new Disciplina(123, 'Matemática', 8);
console.log(d1);

const d2 = d1;
console.log(d2);

d2.codigo = 444;
d2.nome = 'Álgebra';
d2.nota = 9;

console.log(d1)

const p1 = new Produto(337, "Meu Produto", 54);
console.log(p1.vermelho); /* Neste caso eu deveria utilizar a classe e não o 
produto que foi criado para acessar as informações ocultas. Podemos considerar
ela como uma constante, que não será mudada, pois neste caso de classes não tenho
como criar uma variável let ou const dentro do escopo da classe.*/ 