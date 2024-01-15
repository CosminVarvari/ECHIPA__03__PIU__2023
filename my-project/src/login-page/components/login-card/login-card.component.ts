import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginRequest } from '../../../models/login-request';
import { LoginResponse } from '../../../models/login-response';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent{
  hidePassword: boolean = true;
  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router, private route: ActivatedRoute) {}

 loginForm = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("^[a-zA-Z0-9].+$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/)
  ])
  });

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const loginRequest: LoginRequest = {
      email: this.loginForm.controls['username'].value ?? '',
      password: this.loginForm.controls['password'].value ?? ''
    };

    this.authService.login(loginRequest).subscribe((returnedUser: User) => {
      if (!this.authService.isLoggedIn){
        this.loginForm.reset();
        this.router.navigate(['login'], {relativeTo: this.route})
      }
      else {
        this.router.navigate(['profile'], {relativeTo: this.route})
      }
    })
  }
}
