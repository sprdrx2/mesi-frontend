import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';
import { VenueMesiService } from '../venue-mesi.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mesi-venue-form',
  templateUrl: './mesi-venue-form.component.html',
  styleUrls: ['./mesi-venue-form.component.css']
})

export class MesiVenueFormComponent implements OnInit {

  @Input() mesiVenue: VenueMesi;
  private isPosting = false;
  private isPosted = false;

  constructor(private venueMesiService: VenueMesiService, private router: Router) { }

  ngOnInit() {
  }

  async submit() {
    this.isPosting = true;
    console.log('Soumission: ');
    console.log(this.mesiVenue);
    await this.venueMesiService.createOrUpdateVenue(this.mesiVenue);
    this.isPosting = false;
    this.isPosted = true;
    console.log('navigate');
    this.router.navigate(['venue', this.mesiVenue.yelp_id]);
  }

}
