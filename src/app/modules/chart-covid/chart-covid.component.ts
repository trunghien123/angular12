import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-chart-covid',
  templateUrl: './chart-covid.component.html'
})
export class ChartCovidComponent implements OnInit {

  countries = ['Việt Nam', 'Indonesia', 'Thailand', 'Malaysia'];
  constructor(
    private apiCovid: CoronaService
  ) { }
  dateDefault = new Date();
  ngOnInit(): void {
    this.getDataCovid('vn', 0, 'vietnam', `${this.dateDefault.toLocaleDateString()}`);
    this.getDataCovid('id', 1, 'indo', `${this.dateDefault.toLocaleDateString()}`);
    this.getDataCovid('th', 2, 'thailand', `${this.dateDefault.toLocaleDateString()}`);
    this.getDataCovid('my', 3, 'malaysia', `${this.dateDefault.toLocaleDateString()}`);
    this.getDataCovid('ae', 4, 'UAE', `${this.dateDefault.toLocaleDateString()}`);

  }

  changeDate(event: MatDatepickerInputEvent<Date>) {
    let dateChanged = new Date(`${event.value}`).toLocaleDateString();
    this.getDataCovid('vn', 0, 'vietnam', `${dateChanged}`);
    this.getDataCovid('id', 1, 'indo', `${dateChanged}`);
    this.getDataCovid('th', 2, 'thailand', `${dateChanged}`);
    this.getDataCovid('my', 3, 'malaysia', `${dateChanged}`);
    this.getDataCovid('ae', 4, 'UAE', `${dateChanged}`);
    console.log(dateChanged);
  }
  getDataCovid(data: any, i: any, _arr: any, date: any): void {
    let arr = [] as any;
    let datasetCovid = [] as any;
    this.apiCovid.getCovid(data).subscribe(
      (res: any) => {
        datasetCovid = res.filter((value: any) => { return new Date(value.Date).toLocaleDateString() === date });
        console.log(datasetCovid);
        if (datasetCovid.length > 0) {
          arr.push(datasetCovid[0].Deaths);
          arr.push(datasetCovid[0].Recovered);
          this.ChartData[i].data = arr;
          arr.push(datasetCovid[0].Active);
          this.ChartData[i].label = datasetCovid[0].Country;
        } else {
          alert("Dữ liệu không tồn tại. Mời bạn thử lại")
        }
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  //chart
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
      backgroundColor: '#ededed'
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
      backgroundColor: '#f05162',
      hoverBackgroundColor: '#f6374c',
    },
  ];

  ChartLegend = true;
  ChartPlugins = [];
  ChartType = "bar" as const;

}
