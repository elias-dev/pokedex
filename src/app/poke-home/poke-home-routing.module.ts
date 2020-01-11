import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';

const routes: Routes = [
  {
    path:'',
    component:PokeHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeHomeRoutingModule { }
