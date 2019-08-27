import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { VenueMesiFilter } from '../venue-mesi-filter';
import { YelpService } from '../yelp.service';
import { YelpVenue } from '../yelp-venue';
import { VenueMesiService } from '../venue-mesi.service';
import { VenueMesi } from '../venue-mesi';
import { MesiBackendResponse } from '../mesi-backend-response';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})

export class SearchEngineComponent implements OnInit {

  searchString: String;
  mesiVenuesFilter: VenueMesiFilter;
  isComputing: boolean;
  previousInput: String;
  displayBBNotFriendly: boolean;
  displayUnknownStatus: boolean;
  displayBBFriendly: boolean;
  yelpVenues: Array<YelpVenue>;
  mesiVenuesBBFriendlyFiltered: Array<VenueMesi>;
  mesiVenuesBBFriendlyUnfiltered: Array<VenueMesi>;
  mesiVenuesBBNotFriendly: Array<VenueMesi>;
  mesiVenuesUnknownStatus: Array<VenueMesi>;
  mesiBackendResponse: MesiBackendResponse;

  constructor(private route: ActivatedRoute, private yelpService: YelpService, private venueMesiService: VenueMesiService) { }

  ngOnInit() {
    this.mesiVenuesFilter = new VenueMesiFilter;
    this.route.params.subscribe(
      params => {
        this.previousInput = '';
        this.displayBBNotFriendly = false;
        this.displayUnknownStatus = false;
        this.displayBBFriendly = true;
        this.isComputing = true;
        console.log('Search Parameters: '); console.log(params);
        this.searchString = params['searchString'];
        this.mesiVenuesFilter.reset();
        this.mesiVenuesFilter.hasEspaceJeu        = params['filterEspaceJeuRequired'];
        this.mesiVenuesFilter.hasEspacePoussette  = params['filterEspacePoussetteRequired'];
        this.mesiVenuesFilter.hasMenuEnfant       = params['filterMenuEnfantRequired'];
        this.mesiVenuesFilter.hasTableLanger      = params['filterTableLangerRequired'];
        this.mesiVenuesFilter.hasTableLangerMen   = params['filterTableLangerMenRequired'];
        console.log('searchString: '); console.log(this.searchString);
        console.log('mesiVenuesFilter: '); console.log(this.mesiVenuesFilter);
        this.inputRecherche();
      }
    );
  }

  inputRecherche() {
    this.mesiVenuesBBFriendlyFiltered = [];
    console.log('previousInput: '); console.log(this.previousInput);
    console.log('searchString: '); console.log(this.searchString);
    console.log('Display BBNotFriendly: '); console.log(this.displayBBNotFriendly);
    console.log('Display UnknownStatus: '); console.log(this.displayUnknownStatus);
    if (this.searchString === this.previousInput) {
      console.log("recherche identique à la précédentes, pas de requête aux API");
      this.afterRecherche();
    } else {
      this.recherche(this.searchString);
    }
    this.previousInput = this.searchString;
  }

  async recherche(location: String) {
    this.mesiBackendResponse = await this.venueMesiService.getVenues(location);
    this.mesiVenuesBBFriendlyUnfiltered = this.mesiBackendResponse.bbFriendlyVenues;
    this.mesiVenuesBBNotFriendly = this.mesiBackendResponse.bbNotFriendlyVenues;
    this.mesiVenuesUnknownStatus = this.mesiBackendResponse.unknownStatusVenues;
    this.afterRecherche();
  }

  afterRecherche() {
    if(this.mesiVenuesFilter.hasFilters()) {
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
}
