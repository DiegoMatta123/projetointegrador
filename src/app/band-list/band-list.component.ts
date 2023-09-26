import { Component } from '@angular/core';


interface Band {
  name: string;
  message: string;
  showTextBox: boolean;
}

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent {
  bands: Band[] = [
    { name: 'ACDC', message: 'Uma das mais famosas bandas de hard rock do planeta, o AC/DC surgiu em 1973, na Austrália, e permanece na atividade até hoje. Formado pelos irmãos guitarristas Malcolm e Angus Young, o grupo é considerado como um dos mais importantes da história. Com milhões de álbuns vendidos ao redor do mundo, o AC/DC já teve inúmeras formações. A atual é composta por Angus Young e seu sobrinho Stevie Young, além do baterista Phil Rudd, do baixista Cliff Williams e do vocalista Brian Johnson.', showTextBox: false },

    { name: 'Alice in Chains', message: 'Alice in Chains é uma banda de rock estadunidense fundada pelo guitarrista e vocalista Jerry Cantrell e pelo baterista Sean Kinney em Seattle, Washington, no ano de 1987. O baixista Mike Starr e o vocalista Layne Staley se juntaram à banda em seguida. Mike Starr foi substituído por Mike Inez em 1993.', showTextBox: false },

    { name: 'Audioslave', message: 'Avenged Sevenfold é uma banda norte americana de heavy metal, fundada em 1999 em Huntington Beach, Califórnia. A banda consiste com M. Shadows vocal, os guitarristas Zacky Vengeance e Synyster Gates, o baixista Johnny Christ e o baterista Brooks Wackerman.', showTextBox: false },

    { name: 'Avenged Sevenfold', message: 'Audioslave foi um supergrupo de rock norte-americano formado em 2001, em Los Angeles, na Califórnia. A banda consistiu do ex-integrante do Soundgarden, Chris Cornell, como vocalista e guitarrista, e pelos ex-integrantes do Rage Against the Machine, Tom Morello, Tim Commerford e Brad Wilk', showTextBox: false },

    { name: 'Black Sabbath', message: 'O embrião do Black Sabbath surgiu no ano de 1968 em Aston, uma localidade de Birmingham, Inglaterra. A história começou quando o guitarrista Anthony Tony Iommi e o baterista William "Bill" Ward (ambos do grupo Mithology) leram em uma loja, o anúncio de um cantor que estava à procura de músicos para formar uma banda.', showTextBox: false },

    { name: 'Capital Inicial', message: 'O Capital Inicial surgiu em 1982, formado pelos irmãos Fê (bateria) e Flávio Lemos (baixo), ex-integrantes do Aborto Elétrico, ao lado de Renato Russo , e Loro Jones (guitarra), oriundo da banda Blitz 64.', showTextBox: false },

    { name: 'Charlie Brown Jr', message: 'Charlie Brown Jr. foi uma banda brasileira de rock formada em 1992 na cidade de Santos, por Chorão (vocal), Champignon (baixo), Marcão Britto (guitarra), Thiago Castanho (guitarra) e Renato Pelado (bateria). Sua discografia contabiliza 11 álbuns de estúdio lançados, 4 álbuns ao vivo e 7 DVDs. Excetuando Chorão, todos os membros da banda são naturais de Santos, uma vez que o vocalista é natural de São Paulo.', showTextBox: false },

    { name: 'Deftones', message: 'O Deftones conseguiu criar um estilo único e autêntico ganhando fãs de diversas tribos (desde punks a rappers). Os quatro integrantes originais (Chino, Abe, Stephen e Chi) se conheceram em um pista de skate quando eram moleques, em Sacramento, CA, Até que um belo dia resolveram montar uma banda, por volta de 1989.', showTextBox: false },

    { name: 'Detonautas ', message: 'Mensagem para Banda C', showTextBox: false },

    { name: 'Eagles', message: 'Eagles é uma banda norte-americana de rock, formada em 1971 em Los Angeles, Califórnia por Glenn Frey, Don Henley, Bernie Leadon e Randy Meisner. Os Eagles são uma das bandas mais rentáveis da indústria musical dos EUA.', showTextBox: false },

    { name: 'Foo Fighters', message: 'O Deftones conseguiu criar um estilo único e autêntico ganhando fãs de diversas tribos (desde punks a rappers). Os quatro integrantes originais (Chino, Abe, Stephen e Chi) se conheceram em um pista de skate quando eram moleques, em Sacramento, CA, Até que um belo dia resolveram montar uma banda, por volta de 1989.', showTextBox: false },

    { name: 'Guns n roses', message: 'A banda começou em 1997 quando Tico (no Rio) e Tchello (na Bahia) se conheceram por um chat e decidiram se reunir. Neste mesmo ano, Renato Rocha entrou na formação com a intenção de tocar teclado, mas logo migrou para a guitarra. O início pela Internet virou notícia e no mesmo ano o Detonautas começou a se apresentar.', showTextBox: false },

    { name: 'HammerFall', message: 'HammerFall é uma banda sueca de power metal. Foi criada em 1993 quando Oscar Dronjak, saiu da banda Ceremonial Oath e convidou Jesper Strömblad para um novo projeto musical que ele estava idealizando.', showTextBox: false },

    { name: 'Iron Maiden', message: 'O Iron Maiden foi criado a partir da jovem cabeça setentista do baixista Steve Harris, depois de um momento em que sua cabeça vivia o sonho de ser jogador do West Ham ao mesmo tempo que ele era incentivado ao amor à música, pelas suas irmãs beatlemaniacas.', showTextBox: false },

    { name: 'Jota Quest', message: 'Jota Quest é uma banda de pop rock brasileira formada em 1993 na cidade de Belo Horizonte. A banda nasceu com o nome J. Quest, por inspiração do desenho animado Jonny Quest. Para não serem processados pela Hanna-Barbera, a banda mudou seu nome para Jota Quest no final da década de 1990.', showTextBox: false },
  
    { name: 'Kiss', message: 'Kiss é uma banda de hard rock dos Estados Unidos, formada em Nova Iorque em 1973 por Paul Stanley e Gene Simmons. Conhecida mundialmente por suas maquiagens, e por seus concertos que incluem guitarras esfumaçantes, cuspir fogo e sangue, pirotecnias e outros efeitos. Antes de chegarem à sua formação atual, a banda passou por algumas mudanças, sendo Stanley e Simmons os dois últimos integrantes da formação original da banda', showTextBox: false },

    { name: 'Linkin Park', message: 'Linkin Park é uma banda de rock dos Estados Unidos formada em Agoura Hills, Califórnia.[9] A formação atual da banda inclui o vocalista e multi-instrumentista Mike Shinoda, o guitarrista Brad Delson, o baixista Dave Farrell, o DJ Joe Hahn e o baterista Rob Bourdon', showTextBox: false },

    { name: 'Legião Urbana', message: 'A Legião Urbana surgiu em 1982 quando Renato Russo juntou- se a Marcelo Bonfá, Eduardo Paraná (Hoje, Kadu Lambach) e Paulo Guimarães. Ico-Ouro Preto teve passagem pela band', showTextBox: false },

    { name: 'Metallica', message: 'Metallica é uma banda norte-americana de heavy metal originária de Los Angeles, mas com base em San Francisco. O seu repertório inclui tempos rápidos, pesados, melódicos, instrumentais e musicalidade agressiva, a qual os consagrou como pioneiros do th', showTextBox: false },

    { name: 'Nirvana', message: 'O Nirvana foi criado em 1987 pelo guitarrista e vocalista Kurt Cobain e pelo baixista Krist Novoselic, em Aberdeen, nos Estados Unidos. Logo depois, o baterista Dave Grohl se uniu ao grupo e foi formado o trio que revolucionou a cena do rock dos anos 90 e influenciou para sempre toda uma geração de fãs no mundo todo.', showTextBox: false },

    { name: 'O rappa', message: 'O Rappa é uma banda de rock brasileira, formada em 1993 no Rio de Janeiro. Notável por suas letras de forte cunho social, foi bem-sucedido por todo seu período de 25 anos (de 1993 até 2018) e voltou a ser banda a partir de janeiro de 2022.', showTextBox: false },

    { name: 'Pantera', message: 'Pantera é uma banda norte-americana de heavy metal formada na cidade de Arlington, no estado do Texas, no ano de 1981, pelos irmãos Vinnie Paul e Diamond Darrell. Sua formação mais conhecida consistia em Vinnie Paul e Dimebag Darrell, juntamente do vocalista Phil Anselmo e o baixista Rex Brown.', showTextBox: false },

    { name: 'Queen', message: 'A história de sucesso dos Queen começou em 1971 com o dinâmico e carismático Freddie Mercury como vocalista, Brian May na guitarra, Roger Taylor na bateria e John Decan no baixo. Juntos tornaram-se na banda de maior sucesso dos anos 70 e 80 e na percursora do rock, tal e qual, como hoje o conhecemos.', showTextBox: false },

    { name: 'Raimundos', message: 'Raimundos é uma banda brasileira de rock formada em Brasília em 1987.[1] O nome é derivado de uma de suas maiores influências, a banda Ramones. Com oito discos autorais, trinta anos de existência e mais de cinco milhões de cópias vendidas, é uma das principais bandas dos anos 90', showTextBox: false },

    { name: 'Red Hot Chili Peppers', message: 'Red Hot Chili Peppers foi formado em Los Angeles em 1983. O funk metal foi um dos primeiro rótulos associado à banda, mas a sua música sempre juntou elementos do rock alternativo, funk, heavy metal, punk rock e rock psicodélico.', showTextBox: false },

    { name: 'Sepultura', message: 'Sepultura é uma banda brasileira de heavy metal criada em 1984 pelos irmãos Max e Igor Cavalera em Belo Horizonte, Minas Gerais.[1][2] Com uma sonoridade que combina death metal e thrash metal com elementos', showTextBox: false },

    { name: 'Slipknot', message: 'O Slipknot foi criado na cidade de Des Moines, capital do estado de Iowa, Estados Unidos, no ano de 1995. Além de se apresentarem mascarados, se destacam também por suas músicas niilistas, sombrias, raivosas e melancólicas. O primeiro álbum da banda intitulado “Slipknot” foi lançado em 1999.', showTextBox: false },

    { name: 'System of a Down ', message: 'O ano era 1992 e a cidade era Los Angeles. Ninguém sabia que estava prestes a se formar a maior e melhor banda que todo o mundo moderno já vira Ali Serj Tankian trabalhava vendendo softwares. Fã de astros da música pop como Billy Joel Abba e Bee Gees ele até tocava numa banda', showTextBox: false },

    { name: 'Titãs', message: 'Titãs é uma banda de rock formada na cidade de São Paulo, Brasil em 1982. Embora originalmente tocassem pop-rock alternativo em seus primórdios, o grupo também já utilizou diversos outros gêneros ao longo dos mais de 40 anos de carreira, como new wave, punk rock, grunge, MPB e música eletrônica.', showTextBox: false },

    { name: 'Ultraje a Rigor', message: 'Ultraje a Rigor é uma banda brasileira de rock, criada no início da década de 1980 em São Paulo. Idealizada por Roger Moreira, obteve sucesso em 1983 no Brasil, devido às canções "Inútil" e "Mim Quer Tocar".', showTextBox: false },

    { name: 'Village People', message: 'Village People é um grupo de disco americano conhecido por seus figurinos de palco e letras sugestivas em suas músicas. Eles ficaram mais conhecidos pelos seus mega-hits mundiais "Macho Man" e "Y.M.C.A.", ambos de 1978.', showTextBox: false },

    { name: 'Whitesnake', message: 'Whitesnake é uma banda de hard rock britânica formada em 1978 por David Coverdale. Ainda que seus primeiros discos tivessem um estilo blues rock herdado da antiga banda de Coverdale, o Whitesnake, logo adotou uma sonoridade mais comercial e acessível de rock.', showTextBox: false },

    { name: 'X Japan', message: 'X Japan, também conhecida apenas como X, é uma banda japonesa de rock de Chiba, formada em 1982 pelo baterista Yoshiki e vocalista Toshi. Inicialmente uma banda predominantemente de power e speed metal, incluindo elementos sinfônicos pesados, moveram em direção a um som progressivo com ênfase em baladas mais tarde.', showTextBox: false },

    { name: 'Yes', message: 'Yes é uma banda britânica de rock progressivo formada originalmente por Jon Anderson, Chris Squire, Tony Kaye, Peter Banks e Bill Bruford em 1968.', showTextBox: false },

    { name: 'Zangwills', message: 'Zangwills é uma banda de indie rock sediada no Reino Unido de Cheshire. Os membros da banda são Jake Vickers Sam Davies Ed Dowling e Adam Spence que formaram em junho de 2017, lançando seu primeiro single, New Heights em dezembro do mesmo ano.', showTextBox: false },


    
   

  ];
  searchLetter: string = '';

  onSearchInput(event: Event): void {
    this.searchLetter = (event.target as HTMLInputElement).value.charAt(0).toLowerCase();
  }

  get filteredBands(): Band[] {
    if (this.searchLetter === '') {
      return this.bands;
    }
    return this.bands.filter(band => band.name.charAt(0).toLowerCase() === this.searchLetter);
  }

  toggleMessage(band: Band): void {
    band.showTextBox = !band.showTextBox;
  }
}
  