export interface Journey {
    destination: Destination;
    accomodation: Accomodation;
}

export interface Accomodation {
    name: string;
    price: number;
    stars: number;
    city: string;
}

export interface Destination {
    name: string;
    weather: string;
    temperature: number;
}
