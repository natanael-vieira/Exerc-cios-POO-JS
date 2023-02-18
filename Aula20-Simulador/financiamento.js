import { Parcela } from "./parcela.js";

export class Financiamento {
    #taxaJuros; //juros mensais
    #prazo; //em meses
    #parcelas = [];
}