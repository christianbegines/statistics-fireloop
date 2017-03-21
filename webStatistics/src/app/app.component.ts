require('chart.js');
import { Component } from '@angular/core';
import { Statistics,FireLoopRef } from './shared/sdk/models';
import { RealTime  } from './shared/sdk/services';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private title:string ='Todo app works';
  private statistics : Statistics= new Statistics();
  private statisticsRef : FireLoopRef<Statistics>;
  private statisticsList: Statistics[]= new Array<Statistics>();
  private lineChartData:Array<any> = [];
  private lineChartLabels:Array<any> = [];
  private lineChartOptions:any = {
    animation: false,
    responsive: false
  };

  private lineChartColors:Array<any> = [
    { 
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  
  private lineChartLegend:boolean = true;
  private lineChartType:string = 'line';

   constructor(private rt:RealTime){ 
     this.rt.onReady().subscribe(()=>{    
        this.statisticsRef = this.rt.FireLoop.ref<Statistics>(Statistics);
        this.statisticsRef.on('change').subscribe(
          (statisticsList: Statistics[]) => this.statisticsList = statisticsList);
        this.statisticsRef.stats().subscribe(
          (stats:any)=>{
            this.lineChartLabels = new Array();
            this.lineChartData   = new Array();
            let data = new Array();
            stats.forEach((stat: any) => {
            data.push(stat.count);
            this.lineChartLabels.push(moment(stat.universal).format('MM-YYYY'));
        });
        this.lineChartData.push({ data: data, label: 'Number of Dued Todos'});
      });
    });
  }

   create():void{
     this.statisticsRef.create(this.statistics).subscribe(()=>this.statistics=new Statistics());
   }

   update(statistics:Statistics):void{
     this.statisticsRef.upsert(statistics).subscribe();
   }

   remove(statistics:Statistics):void{

      this.statisticsRef.remove(statistics).subscribe();
   }
}
