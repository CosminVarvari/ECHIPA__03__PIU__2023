import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToCuisines() {
    this.router.navigate(['cuisines']);
  }

  goToTransport() {
    this.router.navigate(['transport']);
  }
  goToMyJourneys() {
    this.router.navigate(['my-journeys']);
  }
}
