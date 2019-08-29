import { VenueMesi } from './venue-mesi';

export class VenueMesiFilter {
  
    hasEspacePoussette: boolean;
    hasTableLanger: boolean;
    hasTableLangerMen: boolean;
    hasMenuEnfant: boolean;
    hasEspaceJeu: boolean;

    constructor() {
        this.reset();
    }

    reset() {
        this.hasEspacePoussette = false;
        this.hasTableLanger = false;
        this.hasTableLangerMen = false;
        this.hasMenuEnfant = false;
        this.hasEspaceJeu = false;
    }

    venueComplies(venue: VenueMesi): boolean {
      if (
        (this.hasEspaceJeu && !(venue.espaceJeu))
        || (this.hasEspacePoussette && !(venue.espacePoussette))
        || (this.hasMenuEnfant && !(venue.menuEnfant))
        || (this.hasTableLanger && !(venue.tableLanger))
        || (this.hasTableLangerMen && !(venue.tableLangerMen))
        ) { return false; }
      return true;
    }

    venuesFilter(venues: Array<VenueMesi>): Array<VenueMesi> {
      //if (!this.hasFilters()) { console.log('Filter is off'); return venues; }
      //console.log('Filter is on');
      let filteredVenues: Array<VenueMesi> = [];
      for (const venue of venues) {
        if (this.venueComplies(venue)) {
            filteredVenues = filteredVenues.concat(venue);
        }
      }
      return filteredVenues;
    }

    hasFilters(): boolean {
      if (this.hasEspaceJeu === true) { console.log('f'); return true; }
      if (this.hasEspacePoussette === true) { console.log('f'); return true; }
      if (this.hasMenuEnfant === true) { console.log('f'); return true; }
      if (this.hasTableLanger === true) { console.log('f'); return true; }
      if (this.hasTableLangerMen === true) { console.log('f'); return true; }
      console.log('pas f');
      return false;
    }

}

