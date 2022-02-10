import { Alert } from "./alert.js";

export class NomeController{


    private names:string[] = Array ()
    private optionnames = document.querySelector
    ("#option-names") as HTMLInputElement;
    private membersList = document.querySelector("#list-integrantes") as HTMLInputElement;
    private numberMembers = document.querySelector("#number-people") as any;
    private namef = document.querySelector("#fname") as any
    private alertName = new Alert();


    adicionarName(){

     
        if(this.namef.value!="" && this.namef.value.indexOf(" ")=="-1"){
      
         this.names.push(this.namef.value);
         this.adicionarNamaView();
         const teste2 = this.inputOptionNames();
       console.log(teste2)
     
         this.optionnames.innerHTML = teste2;
     
         this.namef.value = "";
         
        }

        else{
          this.alertName.alertName();
        }

    
}

adicionarNamaView(){
    
  
    var nomeList;
    
    this.membersList.innerHTML = ` <ul id="teste">
               
    </ul>`
    
    this.names.forEach(name => {
    
        `
    
    
       <option>${name}</option>
       
       `
    
       nomeList = document.createElement("li")
       this.membersList.appendChild(nomeList);
        nomeList.textContent = name
        
    });
    
    }


    inputOptionNames(){


        return `
     
        ${this.names.map(name => {
      
        
        return   `
        
          <option>${name}</option>
     
          
          `
           
        })}
        
     `
     
     }


     numberPeople(){

        this.numberMembers.textContent = this.names.length;
     }
     


}