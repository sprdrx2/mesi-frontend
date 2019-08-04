import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';

@Component({
  selector: 'app-mesi-venue-form',
  templateUrl: './mesi-venue-form.component.html',
  styleUrls: ['./mesi-venue-form.component.css']
})
export class MesiVenueFormComponent implements OnInit {

  @Input() mesiVenue: VenueMesi;

  constructor() { }

  ngOnInit() {
  }

  submit() { console.log('Soumission: '); console.log(this.mesiVenue); }

}
