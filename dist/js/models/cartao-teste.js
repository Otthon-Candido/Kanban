import { Alert } from "./alert.js";
import { Cartao } from "./cartão.js";
export class CartaoTeste {
    constructor() {
        this.alertCartao = new Alert;
    }
    teste() {
        var cartao = new Cartao();
        this.cartao = cartao;
        var condicao = true;
        if (this.cartao.name == "VAZIO" || this.cartao.name == "") {
            this.alertCartao.alertCartaoName();
            condicao = false;
        }
        if (this.cartao.descricao == "") {
            this.alertCartao.alertCartaoDescricao();
            condicao = false;
        }
        if (this.cartao.titulo == "") {
            this.alertCartao.alertCartaoTitulo();
            condicao = false;
        }
        if (this.cartao.estimativa == "") {
            this.alertCartao.alertCartaoEstimativa();
            condicao = false;
        }
        return condicao;
    }
}
