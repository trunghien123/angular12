import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'src/app/shares/interceptors/request.interceptor';
@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule    
  ],
  providers: []
})
export class WeatherModule { }
