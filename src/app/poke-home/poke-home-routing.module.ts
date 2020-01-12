import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokedexComponent } from './components/pokedex/pokedex/pokedex.component';
const routes: Routes = [
  {
    path:'',
    component:PokeHomeComponent,
  },
  {
    path:'pokedex',
    component: PokedexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeHomeRoutingModule { }
