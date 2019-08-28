import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';
import { VenueMesiService } from '../venue-mesi.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mesi-venue',
  templateUrl: './mesi-venue.component.html',
  styleUrls: ['./mesi-venue.component.css']
})

export class MesiVenueComponent implements OnInit {

  @Input() v: VenueMesi;
  private displayForm: boolean;
  private isUserLoggued: boolean;
  private displayLogin: boolean;
  private loginTested = false;
  venueFBShareLink: String;

  constructor(private venueMesiService: VenueMesiService, private router: Router) { }

  ngOnInit() {
    this.venueMesiService.isUserLoggued().subscribe(
      (uIsL: boolean) => {
        if(uIsL) { this.isUserLoggued = true; this.loginTested = true; console.log('ok'); }
        else  { this.isUserLoggued = false; this.loginTested = true; console.log('ko'); }
      }
    );
    this.venueFBShareLink= 'https://facebook.com/sharer/sharer.php/?u=bb.perdrix.xyz/venue/' + this.v.yelp_id;
  }

  formDisplay() {
    this.displayForm = true;
  }
}
