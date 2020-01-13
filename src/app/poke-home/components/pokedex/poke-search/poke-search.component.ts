import { Component, OnInit } from '@angular/core';
import { PokeServicesService } from './../../../../core/services/poke-services.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
nombre:any
informacion:any 
  constructor(private router:Router,private route: ActivatedRoute,private pokeServicesService:PokeServicesService) { 
  }

  ngOnInit() {

  }



  buscarPokemonPorNombre(){
    this.route.params.subscribe((params: Params)=>{
      const name = params.name;
      
      
      this.pokeServicesService.getPokemon(name)
      .subscribe(resp=>{
        this.informacion= resp
        this.router.navigate(['/home/pokedex/detalles/'+name])
      },(e)=>{
        if(e.ok == false){
          this.router.navigate(['/home/pokedex'])
        }
      })
    });
  }
}
