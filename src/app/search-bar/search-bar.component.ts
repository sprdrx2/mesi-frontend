import { Component, OnInit } from '@angular/core';
import { VenueMesiFilter } from '../venue-mesi-filter';
import { Router, ActivatedRoute } from '@angular/router';
import { VenueMesiService } from '../venue-mesi.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  mesiVenuesFilter: VenueMesiFilter;
  inputLocation: String;
  autocompleteOptions = {
    types: [],
    componentRestrictions: { country: 'FR' }
  };
  isUserLoggued = false;
  currentUserLogin: string;

  constructor(private router: Router, private venueMesiService: VenueMesiService) { }

  ngOnInit() {
    this.mesiVenuesFilter = new VenueMesiFilter;
    this.venueMesiService.isUserLoggued().subscribe(
      (uIsL: boolean) => {
        if(uIsL) { this.isUserLoggued = true; console.log('user connecté'); this.currentUserLogin = this.venueMesiService.getCurrentUserLogin(); }
        else  { this.isUserLoggued = false; console.log('user pas connecté'); }
      }
    );
  }

  inputRecherche() {
    console.log('inputLocation: '); console.log(this.inputLocation);
    this.router.navigate(['/search', {  searchString: this.inputLocation } ]);
  }

  signIn() {
    console.log('redirect to signin form');
    this.router.navigate(['/signin']);
  }
  
  logIn() {
    console.log('redirect to login form');
    this.router.navigate(['/login']);
  }

  logOut() {
    console.log('deconnexion');
    this.venueMesiService.logOut();
    this.router.navigate(['welcome']);
  }
}
