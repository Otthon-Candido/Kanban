export class FormEstimativa {
    constructor() {
        this.input = [];
        this.formestimativa = document.querySelector("#estimativa");
    }
    condicaoEstimativa(estimativa) {
        if (/[0-9]/.test(estimativa.key) || estimativa.key == "Backspace") {
            if (estimativa.key != "Backspace") {
                this.input.push(estimativa.key);
            }
            else {
                this.input.splice((this.input.length - 1), 1);
            }
        }
        else {
            var teste;
            teste = this.input.join("");
            this.formestimativa.value = teste;
        }
    }
    limparEstimativa() {
        this.input = "";
    }
}
