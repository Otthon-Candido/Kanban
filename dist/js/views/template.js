export class template {
    view(cartoes) {
        return `

    

    
       

    ${cartoes.lista().map(teste => {
            return `         
                         
                             
       
             <div class="cartao">
                 <h3>
                 Titulo:
                 </h3>
                 <p>
                  ${teste.titulo}
                 </p>
                         
                 <h3>
                 Descrição:
                 </h3>
                             <p>
                     ${teste.descricao}
                             </p>
                        
                    <h3>
                    Nome:
                    </h3>
                             <p>
                    ${teste.name}
                             </p>
                    <h3>
                    Estimativa:
                    </h3>
                             <p>
                    ${teste.estimativa}
                             </p>
             </div>
       
        
                                     
            
                         `;
        }).join('')}


                `;
    }
    update(cartoes) {
        var tabelaFazer = document.querySelector("#tabela-afazer");
        var borda = document.querySelector("#borda");
        const tabela = this.view(cartoes);
        borda.classList.add("borda2");
        borda.classList.remove("borda");
        console.log(tabela);
        tabelaFazer.innerHTML = tabela;
    }
}
