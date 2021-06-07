import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  path:string =  'country';
  endpoints:any = {

  }
  valueCovid$ = new BehaviorSubject<any>([]);
  constructor(
    private api : ApiService
  ) { }
    getCovid(data: any) : Observable<any> {
      return this.api.getCovid(this.path, data).pipe(
        map((res: any) => {
          return res;
        })
      )
    }
}
