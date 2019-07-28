import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';

@Component({
  selector: 'app-venue-mesi-marker',
  templateUrl: './venue-mesi-marker.component.html',
  styleUrls: ['./venue-mesi-marker.component.css']
})
export class VenueMesiMarkerComponent implements OnInit {
  @Input() v: VenueMesi;
  vIcon;

  constructor() { 

  }

  ngOnInit() {
  	this.vIcon = {
		url: '/assets/status' + this.vStatus() + '.png',
	        scaledSize: {
                width: 25,
                height: 25
              }
	}
  }

  vStatus() {
	if(this.v.knownStatus) {
		if (this.v.bbFriendly) {
			return "BBFriendly";
		} else {
			return "BBNotFriendly";
		}
	} else {
		return "Unknown";
	}
 }


 
}
