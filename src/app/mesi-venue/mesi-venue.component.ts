import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';

@Component({
  selector: 'app-mesi-venue',
  templateUrl: './mesi-venue.component.html',
  styleUrls: ['./mesi-venue.component.css']
})
export class MesiVenueComponent implements OnInit {

  @Input() v: VenueMesi;

  constructor() { }

  ngOnInit() {
  }

  vStatus() {
	if(!this.v.knownStatus) {  return "Unknown"; }
	else {
		if( 
			this.v.espacePoussette ||
			this.v.tableLanger ||
			this.v.tableLangerMen ||
			this.v.menuEnfant ||
			this.v.espaceJeu
		) { return "BBFriendly"; } 
		else { return "BBNotFriendly"; }
	}
 }


}
