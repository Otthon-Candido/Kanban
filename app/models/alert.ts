export class Alert{

    
   
    private spantitulo = document.querySelector("#span-titulo") as HTMLInputElement;
    private spandescrição = document.querySelector("#span-descricao") as HTMLInputElement;
    private spanname = document.querySelector("#span-name") as HTMLInputElement;
    private avisoName = document.querySelector("#avisoName")as HTMLInputElement;
    private spanestimativa = document.querySelector("#span-estimativa") as HTMLInputElement


    alertCartaoName(){
    

    this.spanname.textContent = "Campo Vazio";
    this.spanname.classList.add("form-style");

    setTimeout( function() {

      var spanname = document.querySelector("#span-name") as HTMLInputElement;

      spanname.textContent = "";

      spanname.classList.remove("form-style");
      }, 2000 );

    }

    alertCartaoDescricao(){
    

        this.spandescrição.textContent = "Campo Vazio";
        this.spandescrição.classList.add("form-style");
  
        setTimeout( function() {

            var spandescricao = document.querySelector("#span-descricao") as HTMLInputElement;
      
            spandescricao.textContent = "";

            spandescricao.classList.remove("form-style");
          }, 2000 );
  
      }

      alertCartaoTitulo(){
    

        this.spantitulo.textContent = "Campo Vazio";
        this.spantitulo.classList.add("form-style");
    
        setTimeout( function() {
    
          var spantitulo = document.querySelector("#span-titulo") as HTMLInputElement;

          spantitulo.textContent = "";

          spantitulo.classList.remove("form-style");
          }, 2000 );
    
        }

        alertCartaoEstimativa(){
    

          this.spanestimativa.textContent = "Campo Vazio";
          this.spanestimativa.classList.add("form-style");
      
          setTimeout( function() {

            var spanestimativa = document.querySelector("#span-estimativa") as HTMLInputElement
      
            spanestimativa.textContent = "";
            spanestimativa.classList.remove("form-style");
            }, 2000 );
      
          }


    alertName(){

      
    
        this.avisoName.classList.add("alert");
        this.avisoName.classList.add("alert-warning");
        this.avisoName.classList.add("alert-warning-teste");
    
        this.avisoName.textContent = "Campos Incompletos";
    
        setTimeout( function() {
            this.avisoName.textContent = "";
            this.avisoName.classList.remove("alert");
            this.avisoName.classList.remove("alert-warning");

            
          }, 2000 );


    }


    alertexclusao(){
      
      return true;
    }


    alertestimativa(){


    this.spanestimativa.classList.add("estimativa-style");

      this.spanestimativa.textContent = "Esse campo só aceita numeros";

     setTimeout( function() {

      var spanestimativa = document.querySelector("#span-estimativa") as HTMLInputElement

      spanestimativa.classList.remove("estimativa-style");

      spanestimativa.textContent = "";
  
  }, 2000 );


    }

    AlertClear(){

      
      var spanname = document.querySelector("#span-name") as HTMLInputElement;

      spanname.textContent = "";

      spanname.classList.remove("form-style");

      

      
      var spandescricao = document.querySelector("#span-descricao") as HTMLInputElement;
  
      spandescricao.textContent = "";

      spandescricao.classList.remove("form-style");


      var spantitulo = document.querySelector("#span-titulo") as HTMLInputElement;

      spantitulo.textContent = "";

      spantitulo.classList.remove("form-style");



      var spanestimativa = document.querySelector("#span-estimativa") as HTMLInputElement
      
      spanestimativa.textContent = "";
      spanestimativa.classList.remove("form-style");

      var spanestimativa = document.querySelector("#span-estimativa") as HTMLInputElement

      spanestimativa.classList.remove("estimativa-style");

      spanestimativa.textContent = "";


    }
}