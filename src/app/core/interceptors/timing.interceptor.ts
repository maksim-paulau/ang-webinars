import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // request interceptor
      let clonedRequest;
      if (req.url.includes('products')) {
        clonedRequest = req.clone({
          params: new HttpParams()
            .set('ts_interceptor', Date.now().toString())
        });
      } else {
        clonedRequest = req;
      }

      return next.handle(clonedRequest)
        .pipe(
          // response interceptor
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response
              if (event.url.includes('products')) {
                const startTime = clonedRequest.params.map.get('ts_interceptor')[0];
                const endTime = Date.now();
                console.log(`${clonedRequest.url} executed in ${new Date(endTime - startTime).getTime()} ms`);
              }
            }
            return event;
          })
        );

    }
  }
