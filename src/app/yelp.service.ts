import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { YelpResponse } from './yelp-response';
import { YelpVenue } from './yelp-venue';

@Injectable({
  providedIn: 'root'
  })

export class YelpService {

  public yelpUrl: string = 'https://corsanywhere.herokuapp.com/https://api.yelp.com/v3';
  private yelpApi: string = this.yelpUrl + '/businesses/search';
  public yelpApiKey: string = 'VUgnEj3HGTTbpvVzNh_gChrFdhnn9Gw75jKm761Hlel0tzsF57f3jdptFHQEtO5C7pBjzndUmIcv0S1C7eZh_-9TCI5m5JKVqwB7rFCQDu1ztwvwxjK1Sqs6OJQsXXYx';
  yelpVenues: Array<YelpVenue>;
  yelpTotal: Number;

  async getVenues(location: String) {
    const authHeaders = new HttpHeaders().set("Authorization", "Bearer " + this.yelpApiKey);
    await this.httpClient.get<YelpResponse>(this.yelpApi + '?limit=50&radius=2000&categories=bars,restaurant&location=' + location, { headers: authHeaders }).toPromise().then((r: YelpResponse) => { this.yelpTotal = r.total; this.yelpVenues = r.businesses; });
    console.log('Yelp: ' + this.yelpTotal + ' results:' );
    let offset = 51;
    while (offset <= this.yelpTotal && offset <= 1000 ) {
      await this.httpClient.get<YelpResponse>(this.yelpApi + '?offset=' + offset + '&limit=50&radius=2000&categories=bars,restaurant&location=' + location, { headers: authHeaders }).toPromise().then((r: YelpResponse) => { this.yelpVenues = this.yelpVenues.concat(r.businesses); });
      offset = offset + 50;
    }
    console.log(this.yelpVenues);
    return this.yelpVenues;
  }


  constructor(private httpClient: HttpClient) { }
}
