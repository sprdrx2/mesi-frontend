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

}
