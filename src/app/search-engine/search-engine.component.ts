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
  //mesiVenuesFilter: VenueMesiFilter;
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

  filterEspaceJeuRequired = false;
  filterEspacePoussetteRequired = false;
  filterMenuEnfantRequired = false;
  filterTableLangerRequired = false;
  filterTableLangerMenRequired = false;
  filterWcEnfantRequired = false;
  filterChaiseHauteRequired = false;

  filtersAreOn = false;

  constructor(private route: ActivatedRoute, private yelpService: YelpService, private venueMesiService: VenueMesiService) { }

  ngOnInit() 
  {
    this.previousInput = '';
    this.route.params.subscribe(
      params => {
        this.displayBBNotFriendly = false;
        this.displayUnknownStatus = false;
        this.displayBBFriendly = true;
        this.isComputing = true;
        console.log('Search Parameters: '); console.log(params);
        this.searchString = params['searchString'];
        console.log('searchString: '); console.log(this.searchString);
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
    /*if (this.searchString === this.previousInput) {
      console.log("recherche identique à la précédentes, pas de requête aux API");
      this.afterRecherche();
    } else {
      this.recherche(this.searchString);
    }*/
    this.recherche(this.searchString);
    this.previousInput = this.searchString;
  }

  async recherche(location: String) {
    this.mesiBackendResponse = await this.venueMesiService.getVenues(location);
    this.mesiVenuesBBFriendlyUnfiltered = this.mesiBackendResponse.bbFriendlyVenues;
    this.mesiVenuesBBNotFriendly = this.mesiBackendResponse.bbNotFriendlyVenues;
    this.mesiVenuesUnknownStatus = this.mesiBackendResponse.unknownStatusVenues;
    this.mesiVenuesBBFriendlyFiltered = this.mesiVenuesBBFriendlyUnfiltered;
    this.isComputing = false;
  }


  isFilterOn(): boolean {
    if (this.filterEspaceJeuRequired === true) { console.log('espaceJeu required'); return true;  }
    if (this.filterEspacePoussetteRequired === true) { console.log('espacePoussette required'); return true;  }
    if (this.filterMenuEnfantRequired === true) { console.log('menuEnfant required'); return true;  }
    if (this.filterTableLangerRequired === true) { console.log('tableLanger required'); return true;  }
    if (this.filterTableLangerMenRequired === true) {  console.log('tableLangerMen required'); return true; }
    if (this.filterChaiseHauteRequired === true) {  console.log('chaiseHaute required'); return true; }
    if (this.filterWcEnfantRequired === true) {  console.log('wcEnfant required'); return true; }
    return false;
  }

  venueCompliesToFilters(v: VenueMesi): boolean {
      if (this.filterEspaceJeuRequired && !v.espaceJeu) { return false; }
      if (this.filterEspacePoussetteRequired && !v.espacePoussette) { return false; }
      if (this.filterMenuEnfantRequired && !v.menuEnfant) { return false; }
      if (this.filterTableLangerRequired && !v.tableLanger) { return false; }
      if (this.filterTableLangerMenRequired && !v.tableLangerMen) { return false; }
      if (this.filterWcEnfantRequired  && !v.wcEnfant) { return false; }
      if (this.filterChaiseHauteRequired && !v.chaiseHaute) { return false; }
      return true;
  }

  venuesFilter(venues: Array<VenueMesi>): Array<VenueMesi> {
    let filteredVenues: Array<VenueMesi> = [];
    for (const venue of venues) {
      if (this.venueCompliesToFilters(venue)) {
          filteredVenues = filteredVenues.concat(venue);
      }
    }
    return filteredVenues;
  }

  filtrer() {
    if(this.isFilterOn()) {
      console.log('filters are on');
      this.filtersAreOn = true;
      this.mesiVenuesBBFriendlyFiltered = this.venuesFilter(this.mesiVenuesBBFriendlyUnfiltered);
    } else {
      console.log('filters are off');
      this.mesiVenuesBBFriendlyFiltered = this.mesiVenuesBBFriendlyUnfiltered;
    }
  }

  viderFiltres() {
    this.filterEspaceJeuRequired = false;
    this.filterEspacePoussetteRequired = false;
    this.filterMenuEnfantRequired = false;
    this.filterTableLangerMenRequired = false;
    this.filterTableLangerRequired = false;
    this.filterChaiseHauteRequired = false;
    this.filterWcEnfantRequired = false;
    this.filtrer();
  }
}
