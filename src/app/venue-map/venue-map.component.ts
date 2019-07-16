import { Component, OnInit } from '@angular/core';
import { YelpService } from '../yelp.service';
import { YelpVenue } from '../yelp-venue';
import { YelpResponse } from '../yelp-response';

@Component({
  selector: 'app-venue-map',
  templateUrl: './venue-map.component.html',
  styleUrls: ['./venue-map.component.css']
})
export class VenueMapComponent implements OnInit {

  title = 'mesi-front';
  lat: number = 45.770508;
  lng: number = 4.805194;

  venues: Array<YelpVenue>;
  venuesCount: number = 0;
  constructor(private yelpService: YelpService) { };

   ngOnInit() {
    this.yelpService.getVenues().subscribe(
     (response: YelpResponse) => { 
       console.log(response); 
       this.venues = response.businesses;
       this.venuesCount = this.venues.length;
      }
    );
  
   }

}
