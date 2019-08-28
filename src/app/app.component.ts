import { Component, OnInit } from '@angular/core';
import { YelpService } from './yelp.service';
import { YelpVenue } from './yelp-venue';
import { VenueMesiService } from './venue-mesi.service';
import { VenueMesi } from './venue-mesi';
import { VenueMesiFilter } from './venue-mesi-filter';
import { MesiBackendResponse } from './mesi-backend-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private yelpService: YelpService, private venueMesiService: VenueMesiService) {

  }

  yelpVenues: Array<YelpVenue>;
  mesiVenuesBBFriendlyFiltered: Array<VenueMesi>;
  mesiVenuesBBFriendlyUnfiltered: Array<VenueMesi>;
  mesiVenuesBBNotFriendly: Array<VenueMesi>;
  mesiVenuesUnknownStatus: Array<VenueMesi>;
  mesiVenuesFilter: VenueMesiFilter;
  inputLocation: String;
  isComputing: boolean;
  previousInput: String;
  welcomeScreen: boolean;
  displayBBNotFriendly: boolean;
  displayUnknownStatus: boolean;
  displayBBFriendly: boolean;
  mesiBackendResponse: MesiBackendResponse;
  recensementMode: boolean;

  ngOnInit() {
     this.mesiVenuesFilter = new VenueMesiFilter;
     this.isComputing = false;
     this.previousInput = '';
     this.welcomeScreen = true;
     this.displayBBNotFriendly = false;
     this.displayUnknownStatus = false;
     this.displayBBFriendly = true;
   }


   inputRecherche() {
    this.welcomeScreen = false;
    this.isComputing = true;
    this.mesiVenuesBBFriendlyFiltered = [];
    console.log('previousInput: '); console.log(this.previousInput);
    console.log('inputLocation: '); console.log(this.inputLocation);
    console.log('Display BBNotFriendly: '); console.log(this.displayBBNotFriendly);
    console.log('Display UnknownStatus: '); console.log(this.displayUnknownStatus);
    if (this.inputLocation === this.previousInput) {
      console.log('recherche identique à la précédentes, pas de requête aux API');
      this.afterRecherche();
    } else {
      this.recherche(this.inputLocation);
    }
    this.previousInput = this.inputLocation;
  }

  async recherche(location: String) {
    this.mesiBackendResponse = await this.venueMesiService.getVenues(location);
    this.mesiVenuesBBFriendlyUnfiltered = this.mesiBackendResponse.bbFriendlyVenues;
    this.mesiVenuesBBNotFriendly = this.mesiBackendResponse.bbNotFriendlyVenues;
    this.mesiVenuesUnknownStatus = this.mesiBackendResponse.unknownStatusVenues;
    this.afterRecherche();
  }

  afterRecherche() {
    if (this.mesiVenuesFilter.hasFilters()) {
      this.filterVenues();
    } else {
      console.log('Filter is off');
      this.mesiVenuesBBFriendlyFiltered = this.mesiVenuesBBFriendlyUnfiltered;
    }
    this.isComputing = false;
  }

  filterVenues() {
      console.log('Filter is on:'); console.log(this.mesiVenuesFilter);
      this.mesiVenuesBBFriendlyFiltered = this.mesiVenuesFilter.venuesFilter(this.mesiVenuesBBFriendlyUnfiltered);
      console.log('Filtered: '); console.log(this.mesiVenuesBBFriendlyFiltered);
  }

  modeRecensementOn() {
    this.isComputing = true;
    this.recensementMode = true;
    this.displayBBFriendly = false;
    this.displayBBNotFriendly = true;
    this.displayUnknownStatus = true;
    this.inputRecherche();
  }

  modeRecensementOff() {
    this.isComputing = true;
    this.recensementMode = false;
    this.displayBBFriendly = true;
    this.displayBBNotFriendly = false;
    this.displayUnknownStatus = false;
    this.inputRecherche();
  }

}
