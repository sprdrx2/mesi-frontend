import { Injectable } from '@angular/core';
import { VenueMesi } from './venue-mesi';
import { HttpClient } from '@angular/common/http';
import { YelpVenue } from './yelp-venue';


@Injectable({
  providedIn: 'root'
})
export class VenueMesiService {
  private venueMesiApiAddress = 'http://localhost:8000/venues/compare';

  constructor(private httpClient: HttpClient) { }

  compare(yelpVenues: Array<YelpVenue>) {
    return this.httpClient.post(this.venueMesiApiAddress, yelpVenues);
  }

}
