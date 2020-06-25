import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxLoadingComponent } from './loading.component';

@NgModule({
  declarations: [GlxLoadingComponent],
  exports: [GlxLoadingComponent],
  imports: [
    CommonModule
  ]
})
export class GlxLoadingModule { }
