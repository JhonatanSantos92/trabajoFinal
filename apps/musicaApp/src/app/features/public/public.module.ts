import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicCommonsModule } from './commons/commons.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeView } from './views/home/home.view';
import { PremiumView } from './views/premium/premium.view';
import { LoginView } from './views/login/login.view';
import { GlxHeaderModule, GlxBannerModule } from '@galaxy/commons/components';

@NgModule({
  declarations: [
    PublicComponent,
    HomeView,
    PremiumView,
    LoginView
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicCommonsModule,
    GlxHeaderModule,
    GlxBannerModule
  ]
})
export class PublicModule { }
