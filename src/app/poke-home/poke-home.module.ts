import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHomeRoutingModule } from './poke-home-routing.module';

import { PokeDetailComponent } from './components/pokedex/poke-detail/poke-detail.component';
import { PokeListComponent } from './components/pokedex/poke-list/poke-list.component';
import { PokeSearchComponent } from './components/pokedex/poke-search/poke-search.component';
import { PokePagerComponent } from './components/pokedex/poke-pager/poke-pager.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';

import { MaterialModule } from './../material/material.module';
import { PokedexComponent } from './components/pokedex/pokedex/pokedex.component';

@NgModule({
  declarations: [
    PokeDetailComponent,
    PokeListComponent,
    PokeSearchComponent,
    PokePagerComponent,
    PokeHomeComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PokeHomeRoutingModule,
    MaterialModule,
  ]
})
export class PokeHomeModule { }
