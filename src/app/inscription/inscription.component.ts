import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VenueMesiService } from '../venue-mesi.service';
import { UserMesi } from '../user-mesi';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  userMesi: UserMesi;
  isComputing = false;
  constructor(private router: Router, private venueMesiService: VenueMesiService) { }

  ngOnInit() {
    this.userMesi = new UserMesi('','');
  }

  async onSubmit() {
    this.isComputing = true;
    console.log('Soumission: ');
    console.log(this.userMesi);
    await this.venueMesiService.createUser(this.userMesi);
    this.router.navigate(['/welcome']);
  }

}
