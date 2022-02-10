export class BuildCartao {
    constructor() {
        this.tabelaFazer = document.querySelector("#tabela-afazer");
        this.idCartao = 100;
    }
    creatElement(tituloChange, descricaoChange, nameChange, estimativaChange, botaoChange) {
        this.cartaoUl = document.createElement("ul");
        this.tituloLi = document.createElement("li");
        this.tituloLi.innerHTML = tituloChange;
        this.tituloLi.classList.add("cartaoLi");
        this.descricaoLi = document.createElement("li");
        this.descricaoLi.innerHTML = descricaoChange;
        this.descricaoLi.classList.add("cartaoLi");
        this.nomeLi = document.createElement("li");
        this.nomeLi.innerHTML = nameChange;
        this.nomeLi.classList.add("cartaoLi");
        this.estimativaLi = document.createElement("li");
        this.estimativaLi.innerHTML = estimativaChange;
        this.estimativaLi.classList.add("cartaoLi");
        this.button = document.createElement('button');
        this.button.setAttribute('type', 'button');
        this.button.innerHTML = botaoChange;
        this.addClassList();
    }
    addClassList() {
        this.tabelaFazer.appendChild(this.cartaoUl);
        this.cartaoUl.appendChild(this.tituloLi);
        this.cartaoUl.appendChild(this.descricaoLi);
        this.cartaoUl.appendChild(this.nomeLi);
        this.cartaoUl.appendChild(this.estimativaLi);
        this.cartaoUl.appendChild(this.button);
        this.cartaoUl.classList.add("cartao");
        this.cartaoUl.setAttribute('id', "c" + this.idCartao);
        this.button.classList.add("button-style");
        this.idCartao++;
    }
}
