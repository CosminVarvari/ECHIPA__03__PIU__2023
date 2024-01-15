import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { LoginRequest } from '../_models/login';
import { environment } from '../environments/environment';
import { Journey } from '../_models/journey';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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

   public getUser(): Observable<User> {
    this.user = JSON.parse(sessionStorage.getItem('user_profile'))
    return of(this.user);
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

  addJourney(newJourney: Journey) {
    this.user.futureTravels.push(newJourney);
    localStorage.setItem('journey', JSON.stringify(newJourney));
    sessionStorage.setItem("user_profile", JSON.stringify(this.user));
  }

}
