import { Component, OnInit } from '@angular/core';
import { PokeServicesService } from './../../../../core/services/poke-services.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})

export class PokeListComponent implements OnInit {
  displayedColumns: string[] = ['id','name','sprite','url' ];
  dataTablePage:any=[]
  pokemonsTotal:number;
  pokemonsSprites:any
  data:any=[]
  deploy:Boolean = false
  datasource: null;
  pageEvent: PageEvent;
  pageIndex:number;
  pageSize:number;
  length:number;
  loading:boolean =true

  constructor(private pokeServicesService:PokeServicesService) { 
    this.getTable(0)
  }
  ngOnInit() {
  
    console.log(this.data); 
  }
  getTable(offset:any){

    this.loading = true
 
    this.pokeServicesService.getPagePokemon(offset)
    .subscribe((resp:any)=>{
      this.dataTablePage = resp.results;
      this.pokemonsTotal = resp.count;
      this.getSprites(resp.results)
    })
  }
  getSprites(...name:any){

    name[0].forEach(element => {
      let name = element.name
      let url = element.url
      this.pokeServicesService.getPokemon(element.name)
    .subscribe((r:any)=>{
      let sprite=r.sprites.front_default
      let id = r.id
      this.data=[...this.data, {id, name, url, sprite}]
      this.data.sort((a,b)=>a.id-b.id)
    })
  });
  this.loading = true
  this.deploy = true
  }

  getEvent(event:PageEvent){
    console.log(event);
    this.data=[]
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
