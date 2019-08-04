import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';
@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  @Input() venuesBBFriendly: Array<VenueMesi>;
  @Input() venuesBBNotFriendly: Array<VenueMesi>;
  @Input() venuesUnknownStatus: Array<VenueMesi>;

  @Input() displayBBFriendly: boolean;
  @Input() displayBBNotFriendly: boolean;
  @Input() displayUnknownStatus: boolean;

  constructor() { }

  // cf template
  ngOnInit() {
    if (!(this.displayBBFriendly)) { this.venuesBBFriendly = []; }
    if (!(this.displayBBNotFriendly)) { this.venuesBBNotFriendly = []; }
    if (!(this.displayUnknownStatus)) { this.venuesUnknownStatus = []; }
  }

}
