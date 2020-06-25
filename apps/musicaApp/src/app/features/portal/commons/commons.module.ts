import { NgModule } from '@angular/core';
import { MusicItemComponent } from './music-item/music-item.component';
import { CommonModule } from '@angular/common';
import { GlxErrorsInterceptorModule } from '@galaxy/commons/interceptors/errors/errors.module';
import { HttpModule } from '../http/http.module';

@NgModule({
    declarations: [MusicItemComponent],
    imports: [
      CommonModule,
      HttpModule,
      GlxErrorsInterceptorModule
    ],
    exports: [MusicItemComponent]
  })
export class PortalCommonsModule {}
