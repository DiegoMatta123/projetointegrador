import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CamisasComponent } from './camisas/camisas.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { BandListComponent } from './band-list/band-list.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from './carrinho.service';



@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CamisasComponent,
    QuemSomosComponent,
    AlbunsComponent,
    

    BandListComponent,
     FooterComponent,
     MenuComponent,
     ArtistasComponent,
     CarrinhoComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
