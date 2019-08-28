import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';
import { VenueMesiService } from '../venue-mesi.service';


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

  constructor(private venueMesiService: VenueMesiService) { }

  ngOnInit() {
    this.venueMesiService.isUserLoggued().subscribe(
      (uIsL: boolean) => {
        if(uIsL) { this.isUserLoggued = true; this.loginTested = true; console.log('ok'); }
        else  { this.isUserLoggued = false; this.loginTested = true; console.log('ko'); }
      }
    );
  }

  formDisplay() {
    this.displayForm = true;
  }
}
