import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlxSpotifynModule } from '../../services/spotify/spotify.module';
import { GlxHeaderInterceptor } from './header.interceptors';

@NgModule({
    imports: [
      GlxSpotifynModule
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: GlxHeaderInterceptor,
        multi: true
      }
    ]
  })
  export class GlxHeaderInterceptorModule { }
