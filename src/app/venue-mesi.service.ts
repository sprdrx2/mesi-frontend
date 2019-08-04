import { Injectable } from '@angular/core';
import { VenueMesi } from './venue-mesi';
import { HttpClient } from '@angular/common/http';
import { YelpVenue } from './yelp-venue';
import { YelpService } from './yelp.service';
import { MesiBackendResponse } from './mesi-backend-response';

@Injectable({
  providedIn: 'root'
})
export class VenueMesiService {
  private venueMesiApiAddress = 'http://localhost:8000/venues/compare';
  mesiVenues;

  constructor(private httpClient: HttpClient, private yelpVenueService: YelpService) { }


  async compare(yelpVenues: Array<YelpVenue>) {
	  await this.httpClient.post(this.venueMesiApiAddress, yelpVenues).toPromise().then((data) => this.mesiVenues = data);
	  console.log('Backend:'); console.log(this.mesiVenues);
	  return this.mesiVenues;
  }

  async getVenues(location: String) {
  	const yelpVenues: Array<YelpVenue> = await this.yelpVenueService.getVenues(location);
	  return this.compare(yelpVenues);
  }
}
