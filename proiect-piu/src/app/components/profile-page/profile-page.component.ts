import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Journey } from 'src/app/_models/journey';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User = new User();
  profileForm: FormGroup;
  showJourney: boolean = false;

  constructor(private authService: DataService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getUser();
    this.initializeForms();
  }

  getUser(): void {
    this.authService.getUser().subscribe(res => {
      this.user = res;
    });
  }

  initializeForms(){
    this.profileForm = this.formBuilder.group({
      name: [this.user?.name || '', Validators.required],
      dob: [this.user?.dob.toLocaleString() || '', [Validators.required]],
      profession: [this.user?.profession || '', [Validators.required]],
      address: [this.user?.address || '', [Validators.required]],
      city: [this.user?.city || '', [Validators.required]],
      country: [this.user?.country || '', [Validators.required]]
      // Add more form controls if necessary
    });
  }

  submit(): void {
    if (this.profileForm.valid) {
      let update: User = {
        name: this.profileForm.controls['name'].value,
        pastTravels: this.user.pastTravels,
        futureTravels: this.user.futureTravels,
        dob: new Date(this.profileForm.controls['dob'].value),
        profession: this.profileForm.controls['profession'].value,
        address: this.profileForm.controls['address'].value,
        city: this.profileForm.controls['city'].value,
        country: this.profileForm.controls['country'].value
        // pastTravels: this.pastTravelsDataSource.data,
        // futureTravels: this.futureTravelsDataSource.data,
      }
      this.authService.updateUser(update);
      this.getUser();
    }
  }

  updateFeedback(travel: Journey) {
    this.authService.updateUser(this.user);
    alert('Feedback saved succesfully');
  }

  showCreateJourney() {
    this.showJourney = true;
  }

  hideCreateJourney() {
    this.showJourney = false;
  }
}
