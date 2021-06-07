import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  pathCountry: string = "general"
  endpoints: any = {
    province: "get_province_list"
  }
  provincesList = [];
  constructor(
    private api: ApiService
  ) { }
  getProvince(): Observable<any> {
    return this.api.getCountry(this.pathCountry, this.endpoints.province).pipe(
      map((res:any) => {
        return this.provincesList = res.reply.provinces;
      })
    )
  }
}
