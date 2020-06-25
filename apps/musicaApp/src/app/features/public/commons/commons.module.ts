import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxErrorsInterceptorModule } from '@galaxy/commons/interceptors/errors/errors.module';
import { HttpModule } from '../../portal/http/http.module';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      HttpModule,
      GlxErrorsInterceptorModule,
    ],
    exports: []
  })
export class PublicCommonsModule {}
