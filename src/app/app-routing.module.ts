import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";
import { QuemSomosComponent } from "./quem-somos/quem-somos.component";
import { CamisasComponent } from "./camisas/camisas.component";
import { AlbunsComponent } from "./albuns/albuns.component";
import { BandListComponent } from "./band-list/band-list.component";
import { ArtistasComponent } from "./artistas/artistas.component";
import { CarrinhoComponent } from "./carrinho/carrinho.component";




const routes: Routes = [
    
    {path: '', component: PaginaInicialComponent},
    {path: 'quemsomos', component: QuemSomosComponent},
    {path: 'camisas', component: CamisasComponent},
    {path: 'albuns', component: AlbunsComponent},
    {path: 'bandlist', component: BandListComponent},
    {path: 'paginainicial', component: PaginaInicialComponent},
    {path: 'artistas', component: ArtistasComponent},
    {path: 'carrinho', component: CarrinhoComponent},
    
    
 

    
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}