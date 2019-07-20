import { Component } from '@angular/core';
import { YelpService } from './yelp.service';
import { YelpVenue } from './yelp-venue';
import { YelpResponse } from './yelp-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private yelpService: YelpService) {}

  venues: Array<YelpVenue>;
  private venuesCount: number;
  inputLoction: String;

  ngOnInit() {
    this.recherche('LYON');
  }

  inputRecherche() {
    this.recherche(this.inputLoction);
  }

  recherche(location: String) {
    this.yelpService.getVenues(location).subscribe(
      (response: YelpResponse) => {
        console.log(response);
        this.venues = response.businesses;
        this.venuesCount = this.venues.length;
       }
     );
  }


}
