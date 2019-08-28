import { VenueMesi } from './venue-mesi';

export class VenueMesiFilter {
    EspacePoussetteRequired: boolean;
    TableLangerRequired: boolean;
    MenTableLangerRequired: boolean;
    MenuEnfantRequired: boolean;
    EspaceJeuRequired: boolean;
    ChaiseHauteRequired: boolean;
    WcEnfantRequired: boolean;

    constructor() {
        this.reset();
    }

    reset() {
        this.EspacePoussetteRequired = false;
        this.TableLangerRequired = false;
        this.MenTableLangerRequired = false;
        this.MenuEnfantRequired = false;
        this.EspaceJeuRequired = false;
        this.ChaiseHauteRequired = false;
        this.WcEnfantRequired = false;
    }


    venueComplies(venue: VenueMesi): boolean {
      if (
        (this.EspaceJeuRequired && !(venue.espaceJeu))
        || (this.EspacePoussetteRequired && !(venue.espacePoussette))
        || (this.MenuEnfantRequired && !(venue.menuEnfant))
        || (this.TableLangerRequired && !(venue.tableLanger))
        || (this.MenTableLangerRequired && !(venue.tableLangerMen))
        || (this.ChaiseHauteRequired && !(venue.chaiseHaute))
        || (this.WcEnfantRequired && !(venue.wcEnfant))
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
      if (
        this.EspaceJeuRequired || this.EspacePoussetteRequired ||
        this.MenuEnfantRequired ||
        this.TableLangerRequired || this.MenTableLangerRequired ||
        this.ChaiseHauteRequired || this.WcEnfantRequired
        )
        {
          return true;
        }
        else   {
           return false;
        }
    }

}

