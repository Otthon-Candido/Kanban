import { BuildCartao } from '../models/build-cartao.js';
import { Cartoes } from './../models/cartoes.js';


export class cartoesView{



    private sizeTable = document.querySelector("#afazer-size") as HTMLInputElement;

    private idBotao = 1;

    private cartao:any;

    private nameChange:any

    private tituloChange:any

    private descricaoChange:any

    private estimativaChange:any

    private botaoChange:any;

    private buildCartao = new BuildCartao();


    update(cartoes:Cartoes){
    

        this.templateView(cartoes);

        this.sizeTable.classList.add("borda2");

        this.sizeTable.classList.remove("borda");


    }

    

    templateView(cartoes:Cartoes){

    this.cartao = cartoes.lista();

    
    this.tituloChange = `
        <h3>
            Titulo:
        </h3>
        <p>
            ${this.cartao.titulo}
        </p>
                        `
    this.descricaoChange =   `
        <h3>
            Descrição:
        </h3>
        <p>
        ${this.cartao.descricao}
        </p>
                        `
    this.nameChange =   `               
        <h3>
            Nome:
        </h3>
        <p>
        ${this.cartao.name}
        </p>
                        `
    this.estimativaChange=    `      
        <h3>
            Estimativa:
        </h3>
        <p>
        ${this.cartao.estimativa}
        </p>
                        `

    

    this.botaoChange=   `

    
    <input  id ="${this.idBotao}" class="img-fluid lixeira submit"  type="image" src="img/Lixeira.png">
    
                        `
                        
   

      this.buildCartao.creatElement(this.tituloChange, this.descricaoChange, this.nameChange, this.estimativaChange, this.botaoChange)

      this.idBotao++;

}

}


