import { Component } from '@angular/core';

interface Artista {
  name: string;
  message: string;
  showTextBox: boolean;
}


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {

  artistas: Artista[] = [

  { name: 'Jon Bon Jovi', message: 'Nascido em 1962, desde de criança Jon sonhava em ser um astro do rock. 21 anos depois, em 1983, ele juntou-se ao guitarrista Richie Sambora, ao tecladista David Rashbaum, ao baterista Tico Torres e ao baixista Alec Such e fundou uma das bandas de maior sucesso na história do rock: o Bon Jovi.', showTextBox: false },

  { name: 'Ozzy Osbourne', message: 'O futuro criador do heavy metal teve infância e adolescência difíceis. Nesse sentido, ele sofria de dislexia e foi vítima de abuso sexual na escola. Logo após deixar o colégio, Ozzy começou a trabalhar em vários empregos duros, como operário de canteiro de obras e encanador.  ', showTextBox: false },

  { name: 'Chorão', message: 'Chorão vivia na rua, ia mal na escola, parou de estudar na sétima série, e frequentemente tinha problemas com a polícia. Com 21 anos, foi convidado a integrar uma banda com Champignon chamada Whats Up, acabou não dando certo, então montou o Charlie Brown Jr.. Em 2007, Chorão roteirizou o filme O Magnata.', showTextBox: false },

  { name: 'Dave Groul ', message: 'David Eric Grohl (Warren, 14 de janeiro de 1969) é um músico e compositor norte-americano. É o fundador, vocalista e guitarrista da banda Foo Fighters. E também ex-baterista das bandas Nirvana, Queens of the Stone Age e Them Crooked Vultures. Por ser extremamente reconhecido inicialmente como baterista do Nirvana (antes do Foo Fighters), foi considerado o 27º maior baterista de todos os tempos pela revista Rolling Stone. No ano de 2003, Grohl casou com Jordyn Blum, e 3 anos depois, teve sua primeira filha Violet Maye Grohl', showTextBox: false },

  { name: 'Axl Rose', message: 'Aos 17 anos, o garoto descobriu uma verdade triste. Quem ele achava que era seu pai era, na verdade, seu padrasto. Sentindo que a sua vida foi uma mentira, ele se mudou para Los Angeles e trocou de nome. A partir daí, recuperou o sobrenome Rose e passou a se identificar como Axl Rose, do jeitinho que o conhecemos hoje.', showTextBox: false },

  { name: 'Billie joe ', message: 'Billie Joe nasceu dia 17 de Fevereiro de 1972 em Rodeo, Califórnia. Ele tem cinco irmãos, David, Alan, Marci, Hollie, e Anna. Seu pai Andy era caminhoneiro e baterista de uma banda de Jazz nos horários vagos. Infelizmente ele faleceu em Setembro de 1982 devido a um câncer no esôfago.', showTextBox: false },

  { name: 'Chester Bennington  ', message: 'Chester era pai de seis filhos (um adotado) que teve com três mulheres, sendo casado com sua última esposa, Talinda Ann Bentley, de 2006 até sua morte. Em 20 de julho de 2017, Bennington foi encontrado morto em sua residência em Palos Verdes Estates, no sul da Califórnia. A causa da morte foi suicídio por enforcamento.', showTextBox: false },

  { name: 'Renato Russo ', message: 'Renato Russo Manfredini Júnior (27 de março de 1960 / 11 de outubro de 1996) nasceu no Rio de Janeiro. Filho do funcionário público do Banco do Brasil, Renato Manfredini, com a professora de inglês, Maria do Carmo. Viveu dos sete aos dez anos em Nova York (EUA), por conta de uma transferência profissional de seu pai.', showTextBox: false },

  { name: 'Kurt Cobain ', message: 'Kurt Cobain (1967-1994) foi um cantor, compositor e músico norte-americano. Foi o fundador, vocalista e guitarrista da banda Nirvana. Viciado em drogas, morreu com apenas 27 anos de idade. Kurt Donald Cobain nasceu em Aberdee, ao sul do estado de Washington, Estados Unidos, no dia 20 de fevereiro de 1967.', showTextBox: false },

  { name: 'Marcelo Falcão ', message: 'Marcelo Falcão Custódio (Rio de Janeiro, 31 de maio de 1973) é um músico e compositor brasileiro, mais conhecido pelo trabalho como vocalista do grupo O Rappa. Nasceu e cresceu no bairro Engenho Novo na cidade do Rio de Janeiro. Falcão fez o primário no colégio Salesiano do Riachuelo, que era próximo de onde morava, no Engenho Novo.', showTextBox: false },
  
]

searchLetter: string = '';

onSearchInput(event: Event): void {
  this.searchLetter = (event.target as HTMLInputElement).value.charAt(0).toLowerCase();
}

get filteredBands(): Artista[] {
  if (this.searchLetter === '') {
    return this.artistas;
  }
  return this.artistas.filter(artistas => artistas.name.charAt(0).toLowerCase() === this.searchLetter.toLowerCase());
}

toggleMessage(artistas: Artista): void {
  artistas.showTextBox = !artistas.showTextBox;
}

}
