import { Component, OnInit} from '@angular/core';
import { VenueMesiService } from '../venue-mesi.service';
import { VenueMesi } from '../venue-mesi';
import { ActivatedRoute } from '@angular/router';
import { YelpService } from '../yelp.service';


@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.css']
})
export class VenuePageComponent implements OnInit {


  venueMesi: VenueMesi;
  isComputing = true;

  constructor(private route: ActivatedRoute, private yelpService: YelpService, private venueMesiService: VenueMesiService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.rechercheOne(params['yelp_id']);
      }
    );
  }

  async rechercheOne(yelp_id) {
    console.log('chargement');
    this.isComputing = true;
  this.venueMesi = await this.venueMesiService.getVenue(yelp_id);
  this.isComputing = false;
  }
}