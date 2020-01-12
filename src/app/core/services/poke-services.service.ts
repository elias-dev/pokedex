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
  public getPagePokemon(next:any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=10"`)
  }
}
