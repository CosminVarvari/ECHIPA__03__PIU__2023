import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Device, mockedDevices } from '../../models/device-response';
import { User } from '../../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private authService: AuthService) { }

  updateUser(value: User) {
    this.authService.updateUser(value);
  }

  deleteUser(userId: number, deviceId: number): Observable<any> {
    return of();
  }


  public getUser(): Observable<User> {
    return of(this.authService.user);
  }
}
