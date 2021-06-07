import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-chart-covid',
  templateUrl: './chart-covid.component.html'
})
export class ChartCovidComponent implements OnInit {

  constructor(
    private apiCovid: CoronaService
  ) { }

  ngOnInit(): void {
    this.getDataCovid('id', 0, 'indo', '6/7/2020');
    this.getDataCovid('th', 1, 'thailand','6/6/2021');
    this.getDataCovid('my', 2, 'malaysia', '6/7/2021');
    this.getDataCovid('vn', 3, 'vietnam', '6/7/2021');
  }
  getDataCovid(data: any, i: any, _arr: any,date: any): void {
    let arr = [] as any;
    let datasetCovid = [] as any;
    this.apiCovid.getCovid(data).subscribe(
      (res: any) => {
        datasetCovid = res.map((item: any) => {
          if (new Date(item.Date).toLocaleDateString() === date) {
            return {
              date: new Date(item.Date).toLocaleDateString(),
              country: item.Country,
              death: item.Deaths,
              active: item.Active,
              recovered: item.Recovered
            }
          }
          return;
        }).filter((value: any) => { return value });

        arr.push(datasetCovid[0].active);
        arr.push(datasetCovid[0].death);
        arr.push(datasetCovid[0].recovered);
        this.ChartData[i].data = arr;
        this.ChartData[i].label = datasetCovid[0].country;
      }, err => {
        console.log(err);
      }
    );
  }

  ChartData: ChartDataSets[] = [
    {
      data: [],
      label: '',
      barPercentage: 0.5,
    },
    {
      data: [],
      label: '',
      barPercentage: 0.5,
    },
    {
      data: [],
      label: '',
      barPercentage: 0.5,
    },
    {
      data: [],
      label: '',
      barPercentage: 0.5,
    },
  ];

  ChartLabels: Label[] = ['Active', 'Deaths', 'Recovered'];

  ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  ChartColors: Color[] = [
    {
      backgroundColor: '#3682bf',
      hoverBackgroundColor: '#3682bf',
    },
  ];

  ChartLegend = false;
  ChartPlugins = [];
  ChartType = "bar" as const;

}
