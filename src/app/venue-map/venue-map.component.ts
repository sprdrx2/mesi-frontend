import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';

@Component({
  selector: 'app-venue-map',
  templateUrl: './venue-map.component.html',
  styleUrls: ['./venue-map.component.css']
})
export class VenueMapComponent implements OnInit {


  @Input() venuesBBFriendly: Array<VenueMesi>;
  @Input() venuesBBNotFriendly: Array<VenueMesi>;
  @Input() venuesUnknownStatus: Array<VenueMesi>;

  @Input() displayBBFriendly: boolean;
  @Input() displayBBNotFriendly: boolean;
  @Input() displayUnknownStatus: boolean;

   ngOnInit() {
   }

}
