// transport.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent {
  selectedCity: string = '';
  cities = ['Rome', 'Budapest', 'Paris', 'Berlin', 'Madrid', 'London'];

  hardcodedTransport: {
    [key: string]: { title: string; image: string; description: string }[];
  } = {
    Rome: [
      {
        title: 'Vespa or Scooter',
        image: 'vespa.jpg',
        description:
          'Classic experience in Rome, exploring the city on a vespa or scooter, giving you the freedom to discover every corner and street.',
      },
      {
        title: 'Metro',
        image: 'metro.jpg',
        description:
          'Efficient metro system in Rome, connecting many of the major tourist attractions, providing a quick way to travel around the city.',
      },
      {
        title: 'Hop-on Hop-off Tourist Bus',
        image: 'bus.jpg',
        description:
          'For a panoramic visit of the city, hop-on hop-off tourist buses are an excellent option, allowing you to get on and off at your favorite attractions.',
      },
    ],
    Budapest: [
      {
        title: 'Tram along the Danube',
        image: 'tramvai.jpg',
        description:
          'Reaching attractions along the Danube with a picturesque tram offers a unique experience and provides superb views.',
      },
      {
        title: 'Bicycle',
        image: 'bike.jpg',
        description:
          'Budapest has numerous bike paths and cyclist-friendly areas, allowing you to explore the city in the open air.',
      },
      {
        title: 'Danube Cruise',
        image: 'cruise.jpg',
        description:
          'For a different perspective of the city, you can opt for a relaxing cruise on the Danube, admiring the landscape from the water.',
      },
    ],
    Paris: [
      {
        title: 'Metro',
        image: 'metro.jpg',
        description:
          'The Paris metro system is one of the most efficient in the world, connecting you quickly to the most famous tourist attractions.',
      },
      {
        title: "Velib' (Bike Sharing System)",
        image: 'velib.jpg',
        description:
          "With an extensive network of bike lanes, you can rent a Velib' bike to easily navigate the city.",
      },
      {
        title: 'Batobus (Water Transport)',
        image: 'batobus.jpg',
        description:
          'Batobus offers a unique way to travel on the Seine, stopping at several points of interest, including the Eiffel Tower and the Louvre Museum.',
      },
    ],
    Berlin: [
      {
        title: 'U-Bahn (Subway)',
        image: 'ubahn.jpg',
        description:
          'The extensive Berlin U-Bahn network makes getting around the city quick and efficient.',
      },
      {
        title: 'Ampelmann (Bike Sharing)',
        image: 'ampelmann.jpg',
        description:
          'Berlin is bike-friendly, and the Ampelmann system offers bike rental options to explore the city.',
      },
      {
        title: 'Trabant Tour',
        image: 'trabant.jpg',
        description:
          'An unusual experience is exploring the city with a Trabant, an iconic car from East Germany, through organized tours.',
      },
    ],
    Madrid: [
      {
        title: 'Metro',
        image: 'metro.jpg',
        description:
          'Madrid has a well-developed metro system, easy to use to quickly reach various destinations.',
      },
      {
        title: 'Electric Bicycle',
        image: 'bicycle.jpg',
        description:
          'With an increasing number of bike lanes, you can rent electric bicycles to explore the city at a relaxed pace.',
      },
      {
        title: 'Tourist Bus',
        image: 'bus.jpg',
        description:
          "Hop-on hop-off bus tours provide a comfortable way to see the city's main attractions.",
      },
    ],
    London: [
      {
        title: 'Tube (Subway)',
        image: 'metro.jpg',
        description:
          'The extensive London Tube network offers a fast way to travel between the most famous destinations.',
      },
      {
        title: 'Thames River Boat',
        image: 'boat.jpg',
        description:
          'Travel on the Thames by boat, passing by iconic bridges and famous monuments.',
      },
      {
        title: 'Santander Cycles (Bicycle Sharing)',
        image: 'bicycle.jpg',
        description:
          'London has the Santander Cycles bike rental system, offering an eco-friendly and affordable alternative to visit the city.',
      },
    ],
  };

  get transportDescription(): string {
    return this.selectedCity
      ? this.getTransportDescription(this.selectedCity)
      : 'Discover the Local Transportation';
  }

  getTransportDescription(city: string): string {
    switch (city) {
      case 'Rome':
        return 'Rome offers a variety of transportation options, from the iconic Vespa rides to efficient metro systems.';
      case 'Budapest':
        return 'Budapest provides unique transportation experiences, including scenic tram rides along the Danube.';
      case 'Paris':
        return "Navigate Paris effortlessly with its efficient metro system and explore the city on a Velib' bike.";
      case 'Berlin':
        return 'Discover Berlin with its extensive U-Bahn network and take a Trabant tour for an unconventional experience.';
      case 'Madrid':
        return 'Madrid offers convenient metro services and the option to explore the city on electric bicycles.';
      case 'London':
        return 'Travel around London using the iconic Tube, enjoy a Thames River Boat ride, or cycle with Santander Cycles.';
      default:
        return 'Explore the local transportation options in ' + city + '.';
    }
  }

  resetForm() {
    this.selectedCity = '';
  }

  getImagePath(city: string, imageName: string): string {
    return `../../assets/images/transport/${city.toLowerCase()}/${imageName}`;
  }
}
