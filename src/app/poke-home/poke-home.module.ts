import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHomeRoutingModule } from './poke-home-routing.module';
import { CoreModule } from './../core/core.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { PokeDetailComponent } from './components/pokedex/poke-detail/poke-detail.component';
import { PokeSearchComponent } from './components/pokedex/poke-search/poke-search.component';
import { PokePagerComponent } from './components/pokedex/poke-pager/poke-pager.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokedexComponent } from './components/pokedex/pokedex/pokedex.component';
import { PokeListComponent } from './components/pokedex/poke-list/poke-list.component';

import { Config } from './components/pokedex/poke-list/config.service';
import {MatPaginatorIntl} from '@angular/material/paginator';
import { ChartsModule } from 'ng2-charts';
import { PokegraphComponent } from './components/pokegraph/pokegraph.component';
import { TypeGraphComponent } from './components/pokegraph/type-graph/type-graph.component';

@NgModule({
  declarations: [
    PokeDetailComponent,
    PokeSearchComponent,
    PokePagerComponent,
    PokeHomeComponent,
    PokedexComponent,
    PokeListComponent,
    PokegraphComponent,
    TypeGraphComponent,
    
    
    

  ],
  imports: [
    CommonModule,
    PokeHomeRoutingModule,
    MaterialModule,
    CoreModule,
    ChartsModule,
    FormsModule
  ],
  providers:[{ provide: MatPaginatorIntl, useClass: Config}]
})
export class PokeHomeModule { }
