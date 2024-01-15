import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../user-profile/user-profile.module').then(mod => mod.UserProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('../login-page/login-page.module').then(m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('../login-page/login-page.module').then(m => m.LoginPageModule),
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
