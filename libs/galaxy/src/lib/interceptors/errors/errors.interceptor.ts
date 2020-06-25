import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { statusErrors, codeErrors } from './errors.constants';

@Injectable()
export class GlxErrorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let message: string;
        if (err.error?.message) {
          message = err.error.message;
        } else {
          message = statusErrors.get(err.status) || 'Error Interno';
        }

        return throwError(err);
      })
    );
  }
}
