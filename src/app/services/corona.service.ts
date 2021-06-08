import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  apiCovid : string = environment.apiCovid;
  path:string =  'country';
  endpoints:any = {

  }
  valueCovid$ = new BehaviorSubject<any>([]);
  constructor(
    private api : ApiService
  ) { }
    getCovid(data: any) : Observable<any> {
      return this.api.get(this.apiCovid,this.path, data).pipe(
        map((res: any) => {
          return res;
        })
      )
    }
}
