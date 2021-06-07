import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      request = request.clone({
        headers: new HttpHeaders({
          'X-VS-CLIENT-TYPE': '1001'
        })
      })
    return next.handle(request);
  }
}
