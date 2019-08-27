import { Component, OnInit } from '@angular/core';
import { VenueMesiFilter } from '../venue-mesi-filter';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.mesiVenuesFilter = new VenueMesiFilter;
  }

  inputRecherche() {
    console.log('inputLocation: '); console.log(this.inputLocation);
    this.router.navigate(['/search', {  searchString: this.inputLocation,
                                        filterEspacePoussetteRequired: this.mesiVenuesFilter.hasEspacePoussette,
                                        filterEspaceJeuRequired: this.mesiVenuesFilter.hasEspaceJeu,
                                        filterMenuEnfantRequired: this.mesiVenuesFilter.hasMenuEnfant,
                                        filterTableLangerRequired: this.mesiVenuesFilter.hasTableLanger,
                                        filterTableLangerMenRequired: this.mesiVenuesFilter.hasTableLangerMen
                                      } ]);
  }

  mesiVenuesFilter: VenueMesiFilter;
  inputLocation: String;
  autocompleteOptions = {
    types: [],
    componentRestrictions: { country: 'FR' }
  };


}
