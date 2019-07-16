import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  })

export class YelpService {

  private yelpApi: string = 'https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
  private yelpApiKey: string = 'VUgnEj3HGTTbpvVzNh_gChrFdhnn9Gw75jKm761Hlel0tzsF57f3jdptFHQEtO5C7pBjzndUmIcv0S1C7eZh_-9TCI5m5JKVqwB7rFCQDu1ztwvwxjK1Sqs6OJQsXXYx';
  private venues = [];

  getVenues(): any {
    const authHeaders = new HttpHeaders().set("Authorization", "Bearer " + this.yelpApiKey);
    this.httpClient.get<JSON>(this.yelpApi + '?location=7 Rue Jean-Marie Leclair, 69009 Lyon&radius=2000&categories=bars,restaurant', { headers: authHeaders })
      .subscribe(
      (response) => {
           console.log(response);
	   return response;
        },
        (error) => {
	   console.log('Erreur ! : ' + error);
	   return { erreur: 'erreur '};
        }
      );
  }

  constructor(private httpClient: HttpClient) { }
}
