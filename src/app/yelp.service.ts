import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { YelpResponse } from './yelp-response';

@Injectable({
  providedIn: 'root'
  })

export class YelpService {

  private yelpApi: string = 'https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
  private yelpApiKey: string = 'VUgnEj3HGTTbpvVzNh_gChrFdhnn9Gw75jKm761Hlel0tzsF57f3jdptFHQEtO5C7pBjzndUmIcv0S1C7eZh_-9TCI5m5JKVqwB7rFCQDu1ztwvwxjK1Sqs6OJQsXXYx';
  yelpVenues: Array<YelpVenue>;
  yelpTotal: Number;
 


  async getVenues(location: String) {
    const authHeaders = new HttpHeaders().set("Authorization", "Bearer " + this.yelpApiKey);
    await this.httpClient.get<YelpResponse>(this.yelpApi + '?limit=50&radius=2000&categories=bars,restaurant&location=' + location, { headers: authHeaders }).toPromise().then((r: YelpResponse) => { this.yelpTotal = r.total; this.yelpVenues = r.businesses; });
    console.log('Yelp: ' + this.yelpTotal + ' results:' );
    var offset = 1; const promises = [];
    /*while(this.yelpOffset <= this.yelpTotal && this.yelpOffset <= 1000) {
        offset = offset + 50;
	const promise = this.httpClient.get<YelpResponse>(this.yelpApi + '?offset='+ offset +'&limit=50&radius=2000&categories=bars,restaurant&location=' + location, { headers: authHeaders }).toPromise();
	promises.push(promise);	
    }
    await Promise.all(promises);*/
    console.log(this.yelpVenues);
    return this.yelpVenues;  
  }

  constructor(private httpClient: HttpClient) { }
}
