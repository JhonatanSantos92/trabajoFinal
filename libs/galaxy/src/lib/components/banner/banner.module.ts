import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxBannerComponent } from './banner.component';

@NgModule({
  declarations: [GlxBannerComponent],
  exports: [GlxBannerComponent],
  imports: [
    CommonModule
  ]
})
export class GlxBannerModule { }
