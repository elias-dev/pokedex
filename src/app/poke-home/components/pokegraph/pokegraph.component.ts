import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { PokeServicesService } from './../../../core/services/poke-services.service';
@Component({
  selector: 'app-pokegraph',
  templateUrl: './pokegraph.component.html',
  styleUrls: ['./pokegraph.component.scss']
})
export class PokegraphComponent implements OnInit {
  cantPokemons:any=[]
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'I Generación',
    'II Generación',
    'III Generación',
    'IV Generación',
    'V Generación',
    'VI Generación',
    'VII Generación',
  ];
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0",'#d3a5d3','#009688'] 
    }];
  /*public doughnutChartData: MultiDataSet = [
    this.cantPokemons

  ];*/
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private pokeServicesService:PokeServicesService) { }

  ngOnInit() {
    for (let i = 1; i <= this.doughnutChartLabels.length; i++) {
      this.generation(i)
    }
    
  }

  generation(id:number){
    this.pokeServicesService.getGeneration(id)
    .subscribe((resp:any)=>{
      this.cantPokemons.push(resp.pokemon_species.length)
    })
    }
    
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}