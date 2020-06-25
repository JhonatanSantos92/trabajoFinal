import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeView } from './views/home/home.view';
import { PremiumView } from './views/premium/premium.view';
import { LoginView } from './views/login/login.view';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeView },
      { path: 'premium', component: PremiumView },
      { path: 'help', component: HomeView },
      { path: 'login', component: LoginView },
    ]
  },
  {
    path: 'spotify',
    loadChildren: () => import('./public.module').then(m => m.PublicModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
