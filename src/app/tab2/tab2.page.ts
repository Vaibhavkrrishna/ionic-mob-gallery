import { Component,OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import Chart from 'chart.js/auto';
Chart.defaults.color = 'white';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public chart: any;
  public pie: any;
  imagePath: string;
  landImage: string;

  constructor() {
    this.imagePath = './assets/icon/ey-white-logo.png';
    this.landImage='./assets/icon/ev_bike.png';
  }

  ngOnInit(): void {
    this.createChart();
    this.createPie();
  }
  createChart(){


    this.chart = new Chart('MyChart', {
      type:'bar'  , //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Battery Temp', 'Power Temp','OverCharge','Mechncial Wear'],
	       datasets: [
          {
            label:'Count of Problem Cause',
            data: ['4200','2000', '2800','3000' ],
            backgroundColor: ['#0074D9'],

           // backgroundColor: 'black'
          },
          // {
          //   label: 'Profit',
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }
        ]
      },
      options: {
        aspectRatio:1.5 ,
        responsive: true,

      }
    });
  }
  createPie(){

    this.pie = new Chart('Pie', {
      type:'pie'  , //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Battery Temp', 'Power Temp','OverCharge','Mechncial Wear'],
	       datasets: [
          {
            label: 'Count',
            data: ['4200','2000', '2800','3000' ],
            //backgroundColor: 'grey'
            backgroundColor: ['#0074D9', '#FF4136', '#2ECC40', '#FF851B']
          },
          // {
          //   label: 'Profit',
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }
        ]
      },
      options: {
        aspectRatio:1.25
      }
    });
  }

}
