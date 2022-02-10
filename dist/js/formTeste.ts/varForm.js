import { formView } from "../views/form-view.js";
export class varForm {
    constructor() {
        this.padrinho = [];
        this.madrinha = [];
        this.view = new formView();
    }
    buildVar(condicao) {
        if (condicao == 0) {
            this.form1 = document.querySelector("#form-adiciona");
            this.padrinho[condicao] = this.form1.nomep1.value;
            this.madrinha[condicao] = this.form1.nomem1.value;
            this.tBody = document.querySelector("#tbody");
        }
        if (condicao == 1) {
            this.form2 = document.querySelector("#form-adiciona2");
            this.padrinho[condicao] = this.form2.nomep2.value;
            this.madrinha[condicao] = this.form2.nomem2.value;
            this.tBody = document.querySelector("#tbody2");
        }
        return [this.padrinho[condicao], this.madrinha[condicao]];
    }
    buildForm(formulario) {
        this.tabelaTr = document.createElement("tr");
        this.nomePTd = document.createElement("td");
        this.nomeMTd = document.createElement("td");
        this.nomePTd.textContent = formulario[0];
        this.nomeMTd.textContent = formulario[1];
        this.nomePTd.classList.add("tabela");
        this.nomeMTd.classList.add("tabela");
        this.tabelaTr.classList.add("categoria");
        this.tabelaTr.appendChild(this.nomePTd);
        this.tabelaTr.appendChild(this.nomeMTd);
        return [this.nomeMTd, this.nomePTd, this.tabelaTr, this.tBody];
    }
    removeItens(event) {
        event.target.parentNode.remove();
    }
}
