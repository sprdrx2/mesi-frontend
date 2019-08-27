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
      if (!this.hasFilters()) { return venues; }
      let filteredVenues: Array<VenueMesi> = [];
      for (const venue of venues) {
        if (this.venueComplies(venue)) {
            filteredVenues = filteredVenues.concat(venue);
        }
      }
      return filteredVenues;
    }

    hasFilters(): boolean {
      /*if (
        this.hasEspaceJeu || this.hasEspacePoussette ||
        this.hasMenuEnfant ||
        this.hasTableLanger || this.hasTableLangerMen
        )
        {
          return true;
        }
        else   {
           return false;
        }*/
        return false;
    }

}

