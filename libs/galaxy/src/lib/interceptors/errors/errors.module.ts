import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlxErrorsInterceptor } from './errors.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlxErrorsInterceptor,
      multi: true
    }
  ],
  imports: [
  ]
})
export class GlxErrorsInterceptorModule { }
