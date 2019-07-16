import { Component } from '@angular/core';
import { YelpService } from './yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mesi-front';
  lat: number = 45.770508;
  lng: number = 4.805194;

  //venues = JSON.parse(this.yelpService.getVenues()); /todo
  
  constructor(private yelpService: YelpService) { }  
}
