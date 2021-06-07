import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartCovidRoutingModule } from './chart-covid-routing.module';
import { ChartCovidComponent } from './chart-covid.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ChartCovidComponent
  ],
  imports: [
    CommonModule,
    ChartCovidRoutingModule,
    ChartsModule
  ]
})
export class ChartCovidModule { }
