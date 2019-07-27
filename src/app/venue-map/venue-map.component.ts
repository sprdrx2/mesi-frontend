import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';

@Component({
  selector: 'app-venue-map',
  templateUrl: './venue-map.component.html',
  styleUrls: ['./venue-map.component.css']
})
export class VenueMapComponent implements OnInit {

  title = 'mesi-front';
  @Input() lat: number ;
  @Input() lng: number ;
  @Input() zoomLevel: number ;

  @Input() venues: Array<VenueMesi>;

   ngOnInit() {
   }

}
