export class controleName {
    constructor() {
        this.name = Array();
    }
    adicionarNome(name) {
        var optionnames = document.querySelector("#option-names");
        if (name.value != "" && name.value.indexOf(" ") == "-1") {
            this.name.push(name.value);
            this.adicionarli();
            const teste2 = this.Montandoname();
            console.log(teste2);
            optionnames.innerHTML = teste2;
        }
    }
    numberPeople(number) {
        var numero = this.name.length;
        number.textContent = numero;
    }
    adicionarli() {
        var teste = document.querySelector("#teste");
        var li;
        teste.innerHTML = ` <ul id="teste">
           
</ul>`;
        this.name.forEach(element => {
            `


   <option>${element}</option>
   
   `;
            li = document.createElement("li");
            teste.appendChild(li);
            li.textContent = element;
        });
    }
    Montandoname() {
        return `

   ${this.name.map(element => {
            return `
   
     <option>${element}</option>

     
     `;
        })}
   
   
`;
    }
}
