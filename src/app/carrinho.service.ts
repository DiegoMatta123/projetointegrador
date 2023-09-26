import { Injectable } from '@angular/core';
import { Camisa } from './camisas/camisas.component';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: Camisa[] = [];

  adicionarItem(camisa: Camisa): void {
    this.itens.push(camisa);
  }

  getItens(): Camisa[] {
    return this.itens;
  }

  limparCarrinho(): void {
    this.itens = [];
    
  }

  calcularTotal(): number {
    return this.itens.reduce((total, camisa) => total + camisa.preco, 0);
  }
  
}