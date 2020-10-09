import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {
      origin: "Houston", 
      destination: "San Francisco",
      flightNumber: 321,
      depart: new Date(2020, 10, 7),
      arrive: new Date(2020, 10, 8),
      nonstop: true
    },

    {
      origin: "San Francisco", 
      destination: "Houston",
      flightNumber: 543,
      depart: new Date(2020, 10, 10),
      arrive: new Date(2020, 10, 11),
      nonstop: false
    }
  ];

  constructor() { }

  getFlights() {
    return this.flights;
  }

  postFLights(flight: Flight) {

  }

  deleteFlight(id: number) {

  }
}
