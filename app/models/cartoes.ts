import { Cartao } from "./cartão";


export class Cartoes{

private cartoes:Cartao

adiciona(cartao:Cartao){

     this.cartoes = cartao;

}

lista(){

    return this.cartoes;
}


}