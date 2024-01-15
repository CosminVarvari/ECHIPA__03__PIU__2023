import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './components/login.module';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginPageRoutingModule } from './login-page-touring.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    LoginModule,
    SharedModule
  ],
  exports: [
    LoginPageComponent
  ],
})
export class LoginPageModule { }
