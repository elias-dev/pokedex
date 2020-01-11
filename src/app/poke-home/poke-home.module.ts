import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHomeRoutingModule } from './poke-home-routing.module';

import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';
import { PokePagerComponent } from './components/poke-pager/poke-pager.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    PokeDetailComponent,
    PokeListComponent,
    PokeSearchComponent,
    PokePagerComponent,
    PokeHomeComponent
  ],
  imports: [
    CommonModule,
    PokeHomeRoutingModule,
    MaterialModule,
  ]
})
export class PokeHomeModule { }
