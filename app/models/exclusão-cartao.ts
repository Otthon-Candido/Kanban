import { Alert } from "./alert.js";

export class ExclusaoCartao{

   private alert = new Alert;
    
    atualizarBotoes(){

        var botaoSubmit= document.querySelectorAll(".submit") as any;

  
        botaoSubmit.forEach((botoes:any) => {
            
        
         botoes.addEventListener('click', (botao:HTMLInputElement):any=>{

            var res :any= confirm("Realmente deseja excluir o botão?");
          console.log(res)

            if(res==true){


         this.excluirCartao(botao);
            }
       
   })

   
});

    
    }



    excluirCartao(botao:any){

        var idbotao = parseInt(botao.path[0].id)

      
        var idcartao = "#c" + ( idbotao + 99) ;
  

        var excluirCartao = document.querySelector(idcartao) as any
      
        if(this.alert.alertexclusao()){
        excluirCartao.remove();
        }
    
    }
}