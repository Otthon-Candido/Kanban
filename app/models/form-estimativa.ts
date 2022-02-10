import { Alert } from "./alert.js";

export class FormEstimativa{


    private alert = new Alert();
    

    condicaoEstimativa(estimativa:any){



      if( !(/[0-9]/.test (estimativa.key)) && estimativa.key != "Backspace"){
 
         this.alert.alertestimativa();
     
      }  
      

}


}