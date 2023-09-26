import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

export interface Camisa {
  nome: string;
  imagemUrl: string;
  preco: number;
}

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent {
  public get carrinhoService(): CarrinhoService {
    return this._carrinhoService;
  }
  public set carrinhoService(value: CarrinhoService) {
    this._carrinhoService = value;
  }
  camisas: Camisa[] = [
    {
      nome: 'Camisa Nirvana',
      imagemUrl: 'assets/camisas/camisanirvana.jpg',
      preco: 39.99
    },
    {
      nome: 'Camisa Sepultura',
      imagemUrl: 'assets/camisas/camisasepultura.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa Slipknot',
      imagemUrl: 'assets/camisas/camisaslipknot.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa System of a down',
      imagemUrl: 'assets/camisas/camisasoad.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa Asking Alexandria',
      imagemUrl: 'assets/camisas/camisaaskingalexandria.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa Limp Bizkit',
      imagemUrl: 'assets/camisas/camisalimpbizkit.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa Metalica',
      imagemUrl: 'assets/camisas/camisametalica.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa AC DC ',
      imagemUrl: 'assets/camisas/camisaacdc.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa Soundgarden ',
      imagemUrl: 'assets/camisas/camisasoundgarden.jpg',
      preco: 49.99
    },
    {
      nome: 'Camisa Alice in Chains ',
      imagemUrl: 'assets/camisas/camisaaliceinchains.jpg',
      preco: 49.99
    },
    
  ];

  constructor(private _carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(camisa: Camisa): void {
    this.carrinhoService.adicionarItem(camisa);
  }
}