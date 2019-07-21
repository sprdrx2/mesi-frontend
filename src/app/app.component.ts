import { Component } from '@angular/core';
import { YelpService } from './yelp.service';
import { YelpVenue } from './yelp-venue';
import { YelpResponse } from './yelp-response';
import { VenueMesiService } from './venue-mesi.service';
import { VenueMesi } from './venue-mesi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private yelpService: YelpService, private venueMesiService: VenueMesiService) {}

  yelpVenues: Array<YelpVenue>;
  mesiVenues: Array<VenueMesi>;
  inputLocation: String;

  ngOnInit() {
    this.recherche('LYON');
  }

  inputRecherche() {
    this.recherche(this.inputLocation);
  }

  recherche(location: String) {
    this.yelpService.getVenues(location).subscribe(
      (response: YelpResponse) => {
        console.log(response);
        this.yelpVenues = response.businesses;
        this.venueMesiService.compare(this.yelpVenues).subscribe(
          (response: Array<VenueMesi>) => {
            console.log(response);
            this.mesiVenues = response;
          }
        );
       }
     );
  }


}
