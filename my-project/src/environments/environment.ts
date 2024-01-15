// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  mockedUsers: [{
    name: "Vladut",
    age: 13,
    pastTravels: [
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
    ],
    futureTravels: [
      {
        location: "Ibiza",
        time: new Date(22, 4, 2024),
        price: 100
      }
    ]
  },
  {
    name: "Maia",
    age: 23,
    pastTravels: [
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
    ],
    futureTravels: [
      {
        location: "Ibiza",
        time: new Date(22, 4, 2024),
        price: 100
      }
    ]
  }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
