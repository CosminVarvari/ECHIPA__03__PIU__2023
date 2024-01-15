export const environment = {
  production: false,

  mockedUsers: [{
    name: "Vladut",
    dob: new Date(2001, 12, 12),
    profession: 'itist',
    address: 'Dunarii 20B',
    city: 'Cluj-Napoca',
    country: 'Romania',
    pastTravels: [
      {
        feedback: '',
        destination: {
          name: 'Lisabona',
          weather: 'warm',
          temperature: 20,
        },
        accomodation: {
          name: 'Lisabona Hotel',
          price: 150,
          stars: 5,
          city: 'Lisabona'
        }
      },
      {
        feedback: 'O fost foarte fain',
        destination: {
          name: 'Milano',
          weather: 'warm',
          temperature: 28,
        },
        accomodation: {
          name: 'Milano Super Guest House',
          price: 25,
          stars: 4,
          city: 'Milano'
        }
      },
    ],
    futureTravels: [
      {
        feedback: '',
        destination: {
          name: 'Ibiza',
          weather: 'warm',
          temperature: 32,
        },
        accomodation: {
          name: 'Ibiza Super Guest House',
          price: 250,
          stars: 5,
          city: 'Papucesti'
        }
      }
    ]
  },
  {
    name: "Maia1234",
    profession: 'itista',
    dob: new Date(2001, 11, 11),
    address: 'Detunata 88',
    city: 'Bistrita',
    country: 'Romania',
    pastTravels: [
      {
        feedback: '',
        destination: {
          name: 'Lisabona',
          weather: 'warm',
          temperature: 20,
        },
        accomodation: {
          name: 'Lisabona Hotel',
          price: 150,
          stars: 5,
          city: 'Lisabona'
        }
      },
      {
        feedback: 'O fost foarte fain',
        destination: {
          name: 'Milano',
          weather: 'warm',
          temperature: 28,
        },
        accomodation: {
          name: 'Milano Super Guest House',
          price: 25,
          stars: 4,
          city: 'Milano'
        }
      },
    ],
    futureTravels: [
      {
        feedback: '',
        destination: {
          name: 'Ibiza',
          weather: 'warm',
          temperature: 32,
        },
        accomodation: {
          name: 'Ibiza Super Guest House',
          price: 250,
          stars: 5,
          city: 'Papucesti'
        }
      }
    ]
  }]
};
