import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/_models/login';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent{
  hidePassword: boolean = true;
  constructor(private fb: FormBuilder, private authService: DataService,  private router: Router, private route: ActivatedRoute) {}

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
      }
      else {
        this.router.navigate(['./profile'], {relativeTo: this.route})
      }
    })
  }
}
