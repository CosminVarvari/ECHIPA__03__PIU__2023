import { Component, OnInit, ViewChild } from '@angular/core';
import { Accomodation, Destination, Journey } from 'src/app/_models/journey';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.scss'],
})
export class CreateJourneyComponent implements OnInit {
  constructor(private router: Router) {}
  destinationName = new FormControl('');
  destination: Destination | undefined;
  options: string[] = [
    'Madrid',
    'London',
    'Paris',
    'Berlin',
    'Budapest',
    'Rome',
  ];
  selectedAccommodation: Accomodation | undefined;
  accomodations: Accomodation[] = [
    { name: 'Berlin Grand Plaza', price: 200, stars: 5, city: 'Berlin' },
    { name: 'Berlin Serenity Hotel', price: 110, stars: 3, city: 'Berlin' },
    {
      name: 'Berlin Metropolitan Towers',
      price: 160,
      stars: 4,
      city: 'Berlin',
    },

    { name: 'Budapest Boutique Inn', price: 180, stars: 4, city: 'Budapest' },
    {
      name: 'Budapest Grandeur Lodges',
      price: 120,
      stars: 3,
      city: 'Budapest',
    },
    { name: 'Budapest Artisan Hotels', price: 180, stars: 5, city: 'Budapest' },

    { name: 'Eiffel Palace Paris', price: 110, stars: 3, city: 'Paris' },
    { name: 'Paris Chateau Retreat', price: 130, stars: 3, city: 'Paris' },
    { name: 'Paris Renaissance Hotel', price: 80, stars: 2, city: 'Paris' },

    { name: 'Grand Madrid Hotel', price: 120, stars: 3, city: 'Madrid' },
    { name: 'Madrid Skyline Suites', price: 125, stars: 4, city: 'Madrid' },
    { name: 'Madrid Elegance Inn', price: 90, stars: 2, city: 'Madrid' },

    { name: 'London Harmony House', price: 140, stars: 4, city: 'London' },
    {
      name: 'London Splendid Residences',
      price: 100,
      stars: 3,
      city: 'London',
    },
    { name: 'Royal London Hotel', price: 150, stars: 4, city: 'London' },

    { name: 'Rome Eternal Residency', price: 220, stars: 5, city: 'Rome' },
    { name: 'Rome Heritage Suites', price: 100, stars: 2, city: 'Rome' },
    { name: 'Rome Pantheon Suites', price: 150, stars: 4, city: 'Rome' },
  ];
  filteredAccomodations: Accomodation[] = [];

  filteredOptions: Observable<string[]> | undefined;
  ngOnInit() {
    this.filteredAccomodations = this.accomodations;
    this.filteredOptions = this.destinationName.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  filterCities(value: any) {
    this.filteredAccomodations = this.accomodations.filter(
      (el) => el.city === value
    );
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  selectAccommodation(accomodation: any) {
    this.selectedAccommodation = accomodation;
    console.log(this.selectAccommodation);
  }

  createJourney() {
    let weather = ['sunny', 'rainy', 'cloudy', 'lightning'];
    const random = Math.floor(Math.random() * weather.length);
    const temperatureRandom = Math.floor(Math.random() * 35);
    let destination = {
      name: this.destinationName.value,
      weather: weather[random],
      temperature: temperatureRandom,
    };
    let newJourney = {
      destination: destination,
      accomodation: this.selectAccommodation,
    };
    localStorage.setItem('journey', JSON.stringify(newJourney));
    this.router.navigate(['my-journeys']);
  }

  calculateAirplaneTicketCost(): number {
    // Adaugă costul biletului de avion pentru fiecare destinație
    // Alege sume random pentru fiecare destinație
    const airplaneTicketCosts: { [key: string]: number } = {
      Madrid: 150,
      London: 200,
      Paris: 180,
      Berlin: 160,
      Budapest: 120,
      Rome: 250,
    };

    const selectedDestination = this.destinationName.value;

    // Verifică dacă selectedDestination nu este null sau undefined
    if (selectedDestination != null) {
      return airplaneTicketCosts[selectedDestination] || 0;
    } else {
      // Întoarce o valoare implicită dacă selectedDestination este null sau undefined
      return 0;
    }
  }

  calculateGeneralExpenses(): number {
    // Alege o sumă random pentru cheltuieli generale
    const generalExpenses = Math.floor(Math.random() * 500);
    return generalExpenses;
  }

  calculateTotalCost(): number {
    // Adaugă costurile biletului de avion, cazare și cheltuieli generale
    return (
      this.calculateAirplaneTicketCost() +
      (this.selectedAccommodation?.price || 0) +
      this.calculateGeneralExpenses()
    );
  }
}
