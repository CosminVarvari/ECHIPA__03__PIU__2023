export class User {
  name: string = "";
  age: number = 0;
  pastTravels: Travel[] = [];
  futureTravels: Travel[] = [];
}

export class Travel {
  location: string = "";
  time: Date = new Date();
  price: number = 0;
}

const mockedPreviousTravles: Travel[] = [
  {
    location: "Lisabona",
    time: new Date(22, 11, 2023),
    price: 150
  },
  {
    location: "Milano",
    time: new Date(22, 9, 2023),
    price: 100
  },
]

const futureTravels: Travel[] = [
  {
    location: "Ibiza",
    time: new Date(22, 4, 2024),
    price: 100
  }
]

// export const mockedUser: User = {
//   name: "Maia",
//   age: 23,
//   pastTravels: mockedPreviousTravles,
//   futureTravels: futureTravels
// }
