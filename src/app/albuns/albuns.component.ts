import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

export interface Album {
  nome: string;
  imagemUrl: string;
  preco: number;
}


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent {

  public get carrinhoService(): CarrinhoService {
    return this._carrinhoService;
  }
  public set carrinhoService(value: CarrinhoService) {
    this._carrinhoService = value;
  }

  albuns: Album[] = [
    {
      nome: 'Nevermind',
      imagemUrl: 'assets/albuns/albumnirvana.jpg',
      preco: 200.00
    },
    {
      nome: 'Use Your Ilusion',
      imagemUrl: 'assets/albuns/albumgunsnroses.jpg',
      preco: 150.00
    },

    
    {
      nome: 'Hybrid Theory',
      imagemUrl: 'assets/albuns/albumlinkinpark.jpg',
      preco: 188.00
    },
    {
      nome: 'Toxicity',
      imagemUrl: 'assets/albuns/albumsoad.jpg',
      preco: 188.00
    },
    {
      nome: 'Louder Than Bombs',
      imagemUrl: 'assets/albuns/albumthesmiths.jpg',
      preco: 188.00
    },
    {
      nome: 'Black Album',
      imagemUrl: 'assets/albuns/albummetallica.jpg',
      preco: 188.00
    },
    {
      nome: 'Issues',
      imagemUrl: 'assets/albuns/albumkorn.jpg',
      preco: 188.00
    },
    {
      nome: 'Nightmare',
      imagemUrl: 'assets/albuns/albumaliceinchains.jpg',
      preco: 188.00
    },
    {
      nome: 'Superunknown',
      imagemUrl: 'assets/albuns/albumsoundgarden.jpg',
      preco: 188.00
    },
    {
      nome: 'Three Dollar Bill',
      imagemUrl: 'assets/albuns/10261.webp',
      preco: 188.00
    },
  
  
  ];

    constructor(private _carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(album: Album): void {
    this.carrinhoService.adicionarItem(album);
  }

    

}
