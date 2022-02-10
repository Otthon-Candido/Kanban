export class Cartao {
    constructor() {
        this.inputTitulo = document.querySelector("#titulo");
        this.inputDescricao = document.querySelector("#descricao");
        this.inputNomeCartao = document.querySelector("#option-names");
        this.inputEstimativa = document.querySelector("#estimativa");
        this.descricao = this.inputDescricao.value;
        this.estimativa = this.inputEstimativa.value;
        this.titulo = this.inputTitulo.value;
        this.name = this.inputNomeCartao.value;
    }
    limpar() {
        this.inputTitulo.value = "";
        this.inputDescricao.value = "";
        this.inputNomeCartao.value = "";
        this.inputEstimativa.value = "";
    }
}
