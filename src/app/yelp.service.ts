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
 

  getVenues(location: String) {
    const authHeaders = new HttpHeaders().set("Authorization", "Bearer " + this.yelpApiKey);
    return this.httpClient.get<YelpResponse>(this.yelpApi + '?radius=2000&categories=bars,restaurant&location=' + location, { headers: authHeaders })
  }

  constructor(private httpClient: HttpClient) { }
}
