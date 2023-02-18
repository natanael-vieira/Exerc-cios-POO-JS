import { Parcela } from "./parcela.js";

export class Financiamento {
    #taxaJuros; //juros mensais
    #prazo; //em meses
    #parcelas = [];
    constructor(valor, entrada, taxaJuros, prazo) {
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        this.#parcelas.push(new Parcela(0, 0, 0, 0, valor - entrada))
    }
    calcParcelasMensais() {
        let saldo = this.#parcelas[this.#parcelas.length - 1].getSaldo();
        let prazo = this.#prazo - (this.#parcelas.length - 1);
    }
}