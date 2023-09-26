import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

export interface Camisa {
  nome: string;
  imagemUrl: string;
  preco: number;
}

export interface Album {
  nome: string;
  imagemUrl: string;
  preco: number;
}



@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {

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
      nome: 'Camisa System of a Down',
      imagemUrl: 'assets/camisas/camisasoad.jpg',
      preco: 49.99
    },
    // Adicione mais camisas em destaque conforme necessário
  ];

  albums: Album[] = [
    {
      nome: 'Nevermind',
      imagemUrl: 'assets/albuns/albumnirvana.jpg',
      preco: 200.00
    },
    {
      nome: 'Use Your Illusion',
      imagemUrl: 'assets/albuns/albumgunsnroses.jpg',
      preco: 150.00
    },
    {
      nome: 'Issues',
      imagemUrl: 'assets/albuns/albumkorn.jpg',
      preco: 150.00
    },
    {
      nome: 'Face Lift',
      imagemUrl: 'assets/albuns/albumaliceinchains.jpg',
      preco: 150.00
    },
    // Adicione mais álbuns em destaque conforme necessário
  ];

  constructor(private _carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(item: Camisa | Album): void {
    this._carrinhoService.adicionarItem(item);
  }
}


