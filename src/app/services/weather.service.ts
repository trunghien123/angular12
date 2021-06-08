import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiWeather: string = environment.apiServe;
  path: string = "data/2.5";
  pathCountry: string = "general"
  endpoints: any = {
    id : "weather",
    province: "get_province_list"
  }
  constructor(
    private api: ApiService
  ) { }
  getTemp(data: any): Observable<any> {
    return this.api.get(this.apiWeather, this.path, this.endpoints.id, data).pipe(
      map((res: any) => {
        return res;
      })
    )
  }
}
