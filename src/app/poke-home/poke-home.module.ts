import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHomeRoutingModule } from './poke-home-routing.module';

import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';
import { PokePagerComponent } from './components/poke-pager/poke-pager.component';

@NgModule({
  declarations: [
    PokeHomeComponent,
    PokeDetailComponent,
    PokeListComponent,
    PokeSearchComponent,
    PokePagerComponent
  ],
  imports: [
    CommonModule,
    PokeHomeRoutingModule
  ]
})
export class PokeHomeModule { }
