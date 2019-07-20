import { Component, OnInit, Input } from '@angular/core';
import { YelpVenue } from '../yelp-venue';

@Component({
  selector: 'app-venue-map',
  templateUrl: './venue-map.component.html',
  styleUrls: ['./venue-map.component.css']
})
export class VenueMapComponent implements OnInit {

  title = 'mesi-front';
  @Input() lat: number ;
  @Input() lng: number ;

  @Input() venues: Array<YelpVenue>;

   ngOnInit() {
   }

}
