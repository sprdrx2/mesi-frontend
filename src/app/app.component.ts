import { Component, OnInit } from '@angular/core';
import { YelpService } from './yelp.service';
import { YelpVenue } from './yelp-venue';
import { YelpResponse } from './yelp-response';
import { VenueMesiService } from './venue-mesi.service';
import { VenueMesi } from './venue-mesi';
import { VenueMesiFilter } from './venue-mesi-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private yelpService: YelpService, private venueMesiService: VenueMesiService) {

  }

  yelpVenues: Array<YelpVenue>;
  mesiVenues: Array<VenueMesi>;
  mesiVenuesUnfiltered: Array<VenueMesi>
  mesiVenuesFilter: VenueMesiFilter;
  inputLocation: String;
  requestHasKnownVenues: boolean;
  isComputing: boolean;
  previousInput: String;
  welcomeLatitude: number;
  welcomeLongitude: number;
  welcomeZoomLevel: number;
  welcomeScreen: boolean;

  ngOnInit() {
     this.mesiVenuesFilter = new VenueMesiFilter;
     this.requestHasKnownVenues = true; // pour empêcher l'affichage du msg "pas de resultats"
     this.isComputing = false;
     this.previousInput = '';
     this.welcomeLatitude = 45.770508;
     this.welcomeLongitude = 4.1805194;
     this.welcomeZoomLevel = 4;
     this.welcomeScreen = true;
   }

   inputRecherche() {
    this.welcomeScreen = false;
    this.requestHasKnownVenues = true; // pour empêcher l'affichage du msg "pas de resultats"
    this.isComputing = true;
    this.mesiVenues = [];
    console.log('previousInput: '); console.log(this.previousInput);
    console.log('inputLocation: '); console.log(this.inputLocation);
    if (this.inputLocation === this.previousInput) {
      console.log("recherche identique à la précédentes, pas de requête aux API");
      this.afterRecherche();
    } else {
      this.recherche(this.inputLocation);
    }
    this.previousInput = this.inputLocation;
  }

  async recherche(location: String) {
    this.mesiVenuesUnfiltered = await this.venueMesiService.getVenues(location);
    this.afterRecherche();
  }

  afterRecherche() {
    if(this.filterIsOn()) { this.filterVenues(); } else { this.mesiVenues = this.mesiVenuesUnfiltered; }
    this.doesRequestHaveKnownVenues();
    this.isComputing = false;
  }

  filterIsOn(): boolean {
    let filterIsOn = (
     this.mesiVenuesFilter.hasKnownStatus || this.mesiVenuesFilter.hasEspaceJeu
     || this.mesiVenuesFilter.hasEspacePoussette || this.mesiVenuesFilter.hasMenuEnfant
     || this.mesiVenuesFilter.hasTableLanger || this.mesiVenuesFilter.hasTableLangerMen
    );
    console.log('Filter is on: '); console.log(filterIsOn);
    console.log('Filter: '); console.log(this.mesiVenuesFilter);
    return filterIsOn;
  }

  filterVenues() {    
      this.mesiVenues = [];
      for (const mesiVenue of this.mesiVenuesUnfiltered) {
        if (!(
          (this.mesiVenuesFilter.hasKnownStatus && !(mesiVenue.knownStatus))
          || (this.mesiVenuesFilter.hasEspaceJeu && !(mesiVenue.espaceJeu))
          || (this.mesiVenuesFilter.hasEspacePoussette && !(mesiVenue.espacePoussette))
          || (this.mesiVenuesFilter.hasMenuEnfant && !(mesiVenue.menuEnfant))
          || (this.mesiVenuesFilter.hasTableLanger && !(mesiVenue.tableLanger))
          || (this.mesiVenuesFilter.hasTableLangerMen && !(mesiVenue.tableLangerMen))
          ))  { this.mesiVenues.push(mesiVenue); }
      };
      console.log('Filtered: '); console.log(this.mesiVenues);
  }

  doesRequestHaveKnownVenues() {
    let requestHasKnownVenues = false;
    for (const m of this.mesiVenues) {
      if (m.knownStatus) { requestHasKnownVenues = true; }
    }
    this.requestHasKnownVenues = requestHasKnownVenues;
  }

}
