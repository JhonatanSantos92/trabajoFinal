import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/musicaApp/src/environments/environment';

@Injectable()
export class GlxHeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    };

    const url = `${environment.api}${request.url}`;

    const newRequest = request.clone({
      setHeaders: headers,
      url
    });

    return next.handle(newRequest);
  }

}
