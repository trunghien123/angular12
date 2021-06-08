import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartCovidRoutingModule } from './chart-covid-routing.module';
import { ChartCovidComponent } from './chart-covid.component';
import { ChartsModule } from 'ng2-charts';
import { MatFormFieldModule  } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ChartCovidComponent
  ],
  imports: [
    CommonModule,
    ChartCovidRoutingModule,
    ChartsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule

  ]
})
export class ChartCovidModule { }
