import { Alert } from "./alert.js";
export class ExclusaoCartao {
    constructor() {
        this.alert = new Alert;
    }
    atualizarBotoes() {
        var botaoSubmit = document.querySelectorAll(".submit");
        botaoSubmit.forEach((botoes) => {
            botoes.addEventListener('click', (botao) => {
                this.excluirCartao(botao);
            });
        });
    }
    excluirCartao(botao) {
        var idbotao = parseInt(botao.path[0].id);
        var idcartao = "#c" + (idbotao + 99);
        var excluirCartao = document.querySelector(idcartao);
        if (this.alert.alertexclusao()) {
            excluirCartao.remove();
        }
    }
}
