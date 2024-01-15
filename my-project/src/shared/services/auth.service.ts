import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { LoginRequest } from '../../models/login-request';
import { LoginResponse } from '../../models/login-response';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  updateUser(value: User) {
    this.user = value;
    sessionStorage.setItem("user_profile", JSON.stringify(value))
  }
  user: User;
  private defaultUser: User;
  public get DefaultUser(): User {
    return this.defaultUser;
  }

  constructor() {

   }


  public login(request: LoginRequest): Observable<User> {
    if (this.isLoggedIn) {
      return of(this.user);
    }

    let users = environment.mockedUsers;
    let loggedInUser = users.find(user => user.name === request.email);
    if (loggedInUser) {
      this.user = loggedInUser;
      sessionStorage.setItem('user_profile', JSON.stringify(this.user))
      return of(this.user);
    }
    else {
      return of(this.defaultUser);
    }
  }

  get isLoggedIn() {
    let storageValue = sessionStorage.getItem('user_profile');
    let user = JSON.parse(storageValue);
    return user != null;
  }
}
