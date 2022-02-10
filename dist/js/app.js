import { NomeController } from "./models/adicionar-nome-controllers.js";
import { ExclusaoCartao } from "./models/exclusão-cartao.js";
import { FormEstimativa } from "./models/form-estimativa.js";
import { CartaoTeste } from "./models/cartao-teste.js";
import { Cartoes } from "./models/cartoes.js";
import { Cartao } from "./models/cartão.js";
import { cartoesView } from "./views/cartoes-view.js";
import { Alert } from "./models/alert.js";
var saveName = document.querySelector("#save-name");
var addCartao = document.querySelector("#adicionar-cartao");
const nameController = new NomeController();
saveName.addEventListener("click", saveName => {
    saveName.preventDefault();
    nameController.adicionarName();
    nameController.numberPeople();
});
var view = new cartoesView;
var cartoes = new Cartoes();
var cartao = new Cartao();
var excluirCartao = new ExclusaoCartao();
var alert = new Alert();
addCartao.addEventListener("click", add => {
    add.preventDefault();
    alert.AlertClear();
    var block = new CartaoTeste();
    var atualizar = block.teste();
    if (atualizar) {
        cartoes.adiciona(new Cartao());
        cartao.limpar();
        view.update(cartoes);
        excluirCartao.atualizarBotoes();
    }
});
var estimativa = document.querySelector("#estimativa");
estimativa.addEventListener("keyup", (estimativa) => {
    var estimativaTest = new FormEstimativa();
    estimativaTest.condicaoEstimativa(estimativa);
});
