import { Component, OnInit, Input } from '@angular/core';
import { VenueMesi } from '../venue-mesi';
import { VenueMesiService } from '../venue-mesi.service';

@Component({
  selector: 'app-mesi-venue-form',
  templateUrl: './mesi-venue-form.component.html',
  styleUrls: ['./mesi-venue-form.component.css']
})
export class MesiVenueFormComponent implements OnInit {

  @Input() mesiVenue: VenueMesi;
  private isPosting = false;

  constructor(private venueMesiService: VenueMesiService) { }

  ngOnInit() {
  }

  async submit() {
    this.isPosting = true;
    console.log('Soumission: ');
    console.log(this.mesiVenue);
    this.mesiVenue = await this.venueMesiService.createOrUpdateVenue(this.mesiVenue);
    this.isPosting = false;
  }

}
