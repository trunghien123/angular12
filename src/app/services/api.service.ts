import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { url } from '../helpers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiServer: string = environment.apiServe;
  apiCovid : string = environment.apiCovid;
  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) public locale: any
  ) { }

  /**
   * REQUEST API
   * METHOD POST
   *
   * @param {string} path
   * @param {string} endpoint
   * @param {*} [data={}]
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  get(path: string, endpoint: string, data: any = {}): Observable<any> {
    return this.http.get(url.merge(this.apiServer, path, endpoint, data)).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
  getCovid(path: string, endpoint: string, data: any = {}): Observable<any> {
    return this.http.get(url.merge(this.apiCovid, path, endpoint, data)).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  /**
   * REQUEST API
   * METHOD POST
   *
   * @param {string} path
   * @param {string} endpoint
   * @param {*} [data={}]
   * @param {*} [options={}]
   * @returns
   * @memberof ApiService
   */
  post(path: string, endpoint: string, data: any = {}, options: any = null) {
    let httpOptions;
    if (!options || options.type != 'multipart/form-data') {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': (options && options.type) ? options.type : 'application/json'
        })
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({})
      };
    }
    return this.http.post(url.merge(this.apiServer, path, endpoint), data, httpOptions).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  /**
   * REQUEST API
   * METHOD PUT
   * @param {string} path
   * @param {string} endpoint
   * @param {*} data
   * @param {*} [options]
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  put(path: string, endpoint: string, data: any, options?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': (options && options.type) ? options.type : 'application/json',
      })
    };
    return this.http.put(url.merge(this.apiServer, path, endpoint), data, httpOptions).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  /**
   * REQUEST API FOR FILE DATA
   * METHOD POST
   * @param {string} path
   * @param {string} endpoint
   * @param {*} data
   * @param {*} options
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  file(path: string, endpoint: string, data: any): Observable<any> {
    return this.http.post(url.merge(this.apiServer, path, endpoint), data, { responseType: 'blob' });
  }

//   /**
//    * REQUEST API FOR FILE DATA
//    * METHOD POST
//    * @param {string} link
//    * @memberof ApiService
//    */
//   fileURL(link: string): Observable<any> {
//     return this.http.get(link, { responseType: 'blob' });
//   }

//   /**
//    * Convert json to urlencoded
//    * 
//    * @static
//    * @param {*} data
//    * @returns
//    * @memberof ApiService
//    */
//   public static convertToFormUrlencoded(data) {
//     return Object.keys(data).map(key => {
//       return key + '=' + encodeURIComponent(data[key]);
//     }).join('&');
//   }

//   /**
//    * Convert json to query string
//    *
//    * @static
//    * @param {string} url
//    * @param {*} data
//    * @returns
//    * @memberof ApiService
//    */
//   public static convertToQueryString(url: string, data: any) {
//     const query = Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&');
//     return url + '?' + query;
//   }
}
