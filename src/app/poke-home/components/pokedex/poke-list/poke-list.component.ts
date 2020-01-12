import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokeServicesService } from './../../../../core/services/poke-services.service';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
/* export interface pokemonsList {
  name: string;
  sprite: string;
  url:string
}
 */
export class PokeListComponent implements OnInit {
  displayedColumns: string[] = ['name','url' ];
  dataTablePage:any=[]
  pokemonsTotal:number;
  datasource: null;
  pageEvent: PageEvent;
  pageIndex:number;
  pageSize:number;
  length:number;
  constructor(private pokeServicesService:PokeServicesService) { }
  
  ngOnInit() {
  this.getTable(0)
  }
  getTable(next:any){
    this.pokeServicesService.getPagePokemon(next)
    .subscribe((resp:any)=>{
      this.dataTablePage = resp.results;
      this.pokemonsTotal = resp.count;
    })
  }
  getEvent(event:PageEvent){
    console.log(event);
    
    if (event.pageIndex == 0) {
      this.getTable(event.pageIndex)
    } else {
      if (event.previousPageIndex - event.pageIndex == 1 ) {
        this.getTable(event.pageIndex * 10)
      } 
      if (event.previousPageIndex - event.pageIndex == -1) {
        this.getTable(event.pageIndex * 10)
      } 
    }
    return event
  }
}
