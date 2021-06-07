import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
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
    return this.api.get(this.path, this.endpoints.id, data).pipe(
      map((res: any) => {
        return res;
      })
    )
  }
}
