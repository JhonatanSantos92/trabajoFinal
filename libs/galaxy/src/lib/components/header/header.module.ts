import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GlxHeaderComponent],
  exports: [GlxHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GlxHeaderModule { }
