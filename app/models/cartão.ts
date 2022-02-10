export class Cartao{

    private titulo:string;
    private name:string;
    private descricao:string;
    private estimativa:string;

    private inputTitulo = document.querySelector("#titulo")as HTMLInputElement;

    private inputDescricao = document.querySelector("#descricao")as HTMLInputElement;
    
    private inputNomeCartao = document.querySelector("#option-names")as HTMLInputElement;
    
    private inputEstimativa = document.querySelector("#estimativa")as HTMLInputElement;
   
   constructor(){

   
       this.descricao = this.inputDescricao.value;
       this.estimativa = this.inputEstimativa.value;
       this.titulo = this.inputTitulo.value;
       this.name = this.inputNomeCartao.value;

      
   }

   limpar(){

       this.inputTitulo.value="";
       this.inputDescricao.value="";
       this.inputNomeCartao.value="";
       this.inputEstimativa.value="";

   }

  

}
   
   
   