import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Travel, User } from '../models/user';
import { UserService } from '../shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();
  profileForm: FormGroup;

  pastTravelsDataSource = new MatTableDataSource<Travel>();
  futureTravelsDataSource = new MatTableDataSource<Travel>();
  displayedColumns: string[] = ['location', 'time', 'price'];

  constructor(private userService: UserService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getUser();
    this.initializeForm();
  }

  getUser(): void {
    this.userService.getUser().subscribe(res => {
      this.user = res;
      this.pastTravelsDataSource = new MatTableDataSource(res.pastTravels);
      this.futureTravelsDataSource = new MatTableDataSource(res.futureTravels);
    });
  }

  initializeForm(){
    this.profileForm = this.formBuilder.group({
      name: [this.user?.name || '', Validators.required],
      age: [this.user?.age || '', [Validators.required, Validators.min(14)]]
      // Add more form controls if necessary
    });
  }

  submit(): void {
    if (this.profileForm.valid) {
      let update: User = {
        name: this.profileForm.controls['name'].value,
        age: this.profileForm.controls['age'].value,
        pastTravels: this.pastTravelsDataSource.data,
        futureTravels: this.futureTravelsDataSource.data,
      }
      this.userService.updateUser(update);
      this.getUser();
    }
  }

}
