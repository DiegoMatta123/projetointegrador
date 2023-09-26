import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Camisa } from '../camisas/camisas.component';
import { getDatabase, set, ref } from 'firebase/database';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  
  itensCarrinho: Camisa[] = [];

  constructor(private carrinhoService: CarrinhoService) {
    this.itensCarrinho = carrinhoService.getItens();
  }

  
  limparCarrinho(): void {
    this.carrinhoService.limparCarrinho();
    }



   
  
    get total(): number {
      return this.carrinhoService.calcularTotal();
    }

    finalizarCompra() {
      const produtos = this.itensCarrinho
      console.log("testeeeeeeeeeeeeeeeeeeeee")
      console.log(produtos)
       const db = getDatabase();
       set(ref(db,`finalizarcompra`),produtos);
      alert('Compra finalizada com sucesso!')
    }
 


  
  

 


  

  


}
