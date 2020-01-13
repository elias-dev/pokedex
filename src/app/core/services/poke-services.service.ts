import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokeServicesService {

  constructor(private http: HttpClient) { }

    public getPokemon(name: string){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }
    public getPagePokemon(offset:any){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10"`)
    }
    public getType(name: string){
      return this.http.get(`https://pokeapi.co/api/v2/type/${name}`)
    }
    public getGeneration(id: any){
      console.log('asdasdasd')
      return this.http.get(`https://pokeapi.co/api/v2/generation/${id}`)
    }

  }




