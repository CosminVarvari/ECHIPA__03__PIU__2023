// cuisines.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss'],
})
export class CuisinesComponent {
  selectedCity: string = '';
  cuisines: any[] = [];

  resetForm() {
    this.selectedCity = '';
    this.cuisines = [];
  }

  // Adaugăm un getter care returnează direct datele hardcodate în funcție de oraș
  get hardcodedCuisines() {
    switch (this.selectedCity.toLowerCase()) {
      case 'berlin':
        return [
          {
            title: 'Berliner',
            image: 'berliner.jpg',
            description: 'A delicious Berlin treat',
          },
          {
            title: 'Pretzel',
            image: 'pretzel.jpg',
            description: 'Classic German pretzel',
          },
          {
            title: 'Schnitzel',
            image: 'schnitzel.jpg',
            description: 'Traditional German schnitzel',
          },
        ];
      case 'budapest':
        return [
          {
            title: 'Gulyás',
            image: 'gulyas.jpeg',
            description: 'Hungarian goulash',
          },
          {
            title: 'Paprikás',
            image: 'paprikas.jpg',
            description: 'Paprika-infused dish',
          },
          {
            title: 'Solet',
            image: 'solet.jpg',
            description: 'Hungarian bean stew',
          },
        ];
      case 'london':
        return [
          {
            title: 'Beef Wellington',
            image: 'beef.jpg',
            description: 'A classic British dish',
          },
          {
            title: 'Fish and Chips',
            image: 'fishandchips.jpg',
            description: 'Iconic British fish and chips',
          },
          {
            title: 'Scotch Egg',
            image: 'scotchegg.jpg',
            description: 'A popular British snack',
          },
        ];
      case 'madrid':
        return [
          {
            title: 'Gazpacho',
            image: 'gazpacho.jpg',
            description: 'Refreshing Spanish cold soup',
          },
          {
            title: 'Paella',
            image: 'paella.jpg',
            description: 'Famous Spanish rice dish',
          },
          {
            title: 'Tortilla',
            image: 'tortilla.jpg',
            description: 'Spanish omelette',
          },
        ];
      case 'paris':
        return [
          {
            title: 'Crepes',
            image: 'crepes.jpeg',
            description: 'Thin French pancakes',
          },
          {
            title: 'Escargots',
            image: 'escargots.jpg',
            description: 'Classic French snails dish',
          },
          {
            title: 'Ratatouille',
            image: 'ratatouille.jpg',
            description: 'Vegetarian French stew',
          },
        ];
      case 'rome':
        return [
          {
            title: 'Carbonara',
            image: 'carbonara.jpg',
            description: 'Italian pasta with eggs and cheese',
          },
          {
            title: 'Lasagna',
            image: 'lasagna.jpg',
            description: 'Layered Italian pasta dish',
          },
          {
            title: 'Napoletana',
            image: 'napoletana.jpg',
            description: 'Italian pizza with tomatoes and mozzarella',
          },
        ];
      default:
        return [];
    }
  }
  getImagePath(city: string, imageName: string): string {
    return `../../assets/images/cuisines/${city.toLowerCase()}/${imageName}`;
  }

  getCityDescription(city: string): string {
    switch (city) {
      case 'Berlin':
        return 'Berlin is known for its diverse culinary scene, offering everything from traditional German sausages to trendy fusion cuisine.';
      case 'Budapest':
        return 'Budapest, the capital of Hungary, is famous for its hearty and flavorful dishes. Try goulash and chimney cake for an authentic experience.';
      case 'London':
        return 'London boasts a global culinary landscape. Explore traditional British pubs, international cuisine, and trendy food markets.';
      case 'Madrid':
        return 'Madrid, the heart of Spain, offers a taste of authentic Spanish tapas and paella. Indulge in the vibrant flavors of this lively city.';
      case 'Paris':
        return 'Paris, the culinary capital of the world, invites you to savor exquisite French pastries, cheeses, and gourmet delights.';
      case 'Rome':
        return 'Rome, with its rich history, serves up classic Italian cuisine. Enjoy pasta, pizza, and gelato in the charming streets of the Eternal City.';
      default:
        return 'Explore the local cuisine and flavors of ' + city + '.';
    }
  }
}
