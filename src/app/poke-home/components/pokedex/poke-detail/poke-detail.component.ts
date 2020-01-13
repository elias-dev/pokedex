import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivatedRoute, Params } from '@angular/router';
import { PokeServicesService } from './../../../../core/services/poke-services.service';
@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {
informacion:any 
stats:any = [];
effort:any=[];
types:any = [];
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    'Velocidad',
    'Defensa especial', 
    'Ataque especial',
    'Defensa',
    'Ataque',
    'Puntos de vida'];


  public radarChartData: ChartDataSets[] = [
    { data: this.stats, label: 'Estadisticas base' },
    { data: this.effort, label: 'Esfuerzo' }
  ];
  public radarChartType: ChartType = 'radar';
 
  loadStats(data){
    data.forEach(element => {
      this.stats.push(element.base_stat);
      this.effort.push(element.effort);
    });
  }
  loadTypes(data){
    data.forEach(element => {
      this.types.push(element.type.name);
    });
  }
constructor(private route: ActivatedRoute, private pokeServicesService:PokeServicesService) { 

}

ngOnInit() {
  this.route.params.subscribe((params: Params)=>{
    const name = params.name;
    this.pokeServicesService.getPokemon(name)
    .subscribe(resp=>{
      this.informacion= resp
      this.loadStats(this.informacion.stats);
      this.loadTypes(this.informacion.types);
    })
  });
}
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

}
