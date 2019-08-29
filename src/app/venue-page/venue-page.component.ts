import { Component, OnInit} from '@angular/core';
import { VenueMesiService } from '../venue-mesi.service';
import { VenueMesi } from '../venue-mesi';
import { YelpService } from '../yelp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MesiCommentaire} from '../mesi-commentaire';



@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.css']
})
export class VenuePageComponent implements OnInit {


  venueMesi: VenueMesi;
  isComputing = true;
  isPostingComment = false;
  commentIsPosted = false;
  newComment:string;

  constructor(private route: ActivatedRoute, private yelpService: YelpService, private venueMesiService: VenueMesiService, private router: Router) { }

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

  async comment() {
    this.commentIsPosted = false;
    this.isPostingComment = true;
    await this.venueMesiService.createCommentaire(this.newComment, this.venueMesi.yelp_id);
    this.isPostingComment = false;
    this.commentIsPosted = true;
    let newFullComment = new MesiCommentaire();
    newFullComment.author   = "vous";
    newFullComment.date  = "à l'instant";
    newFullComment.commentaire = this.newComment;
    this.venueMesi.commentaires.push(newFullComment);
    //this.router.navigate(['/venue', this.venueMesi.yelp_id]);
  }
}