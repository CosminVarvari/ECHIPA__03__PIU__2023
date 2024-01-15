import { Journey } from "./journey";

export class User {
  name: string = "";
  dob: Date = new Date();
  profession: string = "";
  address: string = "";
  city: string = "";
  country: string = "";
  pastTravels: Journey[] = [];
  futureTravels: Journey[] = [];
}
