import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeServicesService } from './services/poke-services.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[PokeServicesService]
})
export class CoreModule { }
