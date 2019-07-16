import { Component, OnInit, Input } from '@angular/core';
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
  @Input() lat: number ;
  @Input() lng: number ;

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
