import { Alert } from "./alert.js";
export class FormEstimativa {
    constructor() {
        this.alert = new Alert();
    }
    condicaoEstimativa(estimativa) {
        if (!(/[0-9]/.test(estimativa.key)) && estimativa.key != "Backspace") {
            this.alert.alertestimativa();
        }
    }
}
