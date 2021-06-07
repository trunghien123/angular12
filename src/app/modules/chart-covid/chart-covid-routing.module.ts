import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartCovidComponent } from './chart-covid.component';

const routes: Routes = [
  {
    path: '',
    component: ChartCovidComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartCovidRoutingModule { }
