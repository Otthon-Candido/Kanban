

export class BuildCartao{

    private tabelaFazer = document.querySelector("#tabela-afazer") as HTMLInputElement;

    private idCartao =100;

    private cartaoUl:any

    private tituloLi:any;

    private descricaoLi:any;

    private nomeLi:any

    private estimativaLi:any;

    private button:any;

    creatElement(
                tituloChange:any, descricaoChange:any, nameChange:any, estimativaChange:any, botaoChange:any
                ){

        
       this.cartaoUl = document.createElement("ul")  as any  

       this.tituloLi = document.createElement("li")
      this.tituloLi.innerHTML = tituloChange;
      this.tituloLi.classList.add("cartaoLi");
      
      this.descricaoLi = document.createElement("li")
      this.descricaoLi.innerHTML = descricaoChange;
      this.descricaoLi.classList.add("cartaoLi");

      this.nomeLi = document.createElement("li")
      this.nomeLi.innerHTML = nameChange;
      this.nomeLi.classList.add("cartaoLi");

      this.estimativaLi = document.createElement("li")
      this.estimativaLi.innerHTML = estimativaChange;
      this.estimativaLi.classList.add("cartaoLi");


      this.button = document.createElement('button') as any;
      this.button.setAttribute('type','button')

      this.button.innerHTML = botaoChange;

      this.addClassList();
    }

    addClassList(){

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