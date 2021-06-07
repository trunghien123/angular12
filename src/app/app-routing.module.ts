import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data : {
      title: 'Home'
    }
  },
  {
    path: 'weather',
    loadChildren: () => import('./modules/weather/weather.module').then(m => m.WeatherModule),
    data : {
      title: 'Weather'
    }
  },
  {
    path: 'chartCovid',
    loadChildren: () => import('./modules/chart-covid/chart-covid.module').then(m => m.ChartCovidModule),
    data : {
      title: 'ChartCovid'
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
