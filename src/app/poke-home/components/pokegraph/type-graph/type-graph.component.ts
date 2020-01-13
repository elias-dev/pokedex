import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { PokeServicesService } from './../../../../core/services/poke-services.service';
@Component({
  selector: 'app-type-graph',
  templateUrl: './type-graph.component.html',
  styleUrls: ['./type-graph.component.scss']
})
export class TypeGraphComponent implements OnInit {
  chartLabelsNames:any=[]
  chartData1:any=[]
  chartData2:any=[]
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    this.chartData1,
    this.chartData2,
  ];
  public chartColors: any[] = [
    { 
      backgroundColor:[
      "#FF7360",
      "#6FC8CE",
      "#FAFFF2",
      "#FFFCC4",
      "#B9E8E0",
      '#d3a5d3',
      '#009688',
      '#5a2400',
      '#24005a',
      '#005a51',
      '#78734c',
      '#4c5178',
      '#2d4837',
      '#48442d',
      '#6c5764',
      '#6c6a57',
      '#79677a',
      '#343d33',
      '#795548',
      '#ae9991'
    ] 
    }];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private pokeServicesService:PokeServicesService) { 
    this.pokeServicesService.getType('')
    .subscribe((resp:any)=>{
      //console.log(resp.results);
      this.getCartLabel(resp.results)
      this.getCatnPoke(resp.results)
    })
  }

  ngOnInit() {
  }
  getCartLabel(...names:any){
    names[0].forEach(element => {
      this.chartLabelsNames.push(element.name) 
      
    });
  }
  getCatnPoke(...names:any){
    names[0].forEach((element, index) => {
      //console.log(element.name);
      this.pokeServicesService.getTypeCant(element.name)
      .subscribe((resp:any)=>{

          //this.chartData2.push(resp.pokemon.length)

          this.chartData1.push(resp.pokemon.length)

        
        
      })
    });
    //this.pokeServicesService.getTypeCant()
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}