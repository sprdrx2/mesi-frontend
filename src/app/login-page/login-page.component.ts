import { Component, OnInit } from '@angular/core';
import { VenueMesiService } from '../venue-mesi.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userLogin: string;
  userPassword: string;
  isComputing = false;
  credentialsTested = false;
  credentialsOK = false;

  constructor(private venueMesiService: VenueMesiService, private router: Router) { }

  ngOnInit() {
  }

  async testLogin() {
    let userL = this.userLogin; let userP = this.userPassword;
    this.isComputing = true;
    this.venueMesiService.testLogin(userL, userP);
    this.venueMesiService.isUserLoggued().subscribe(
      (uIsL: boolean) => {
        if(uIsL) { this.credentialsTested = true; this.credentialsOK = true; console.log('login component: login ok'); this.router.navigate(['/welcome']); }
        else  { this.credentialsTested = true; this.credentialsOK = false; console.log('login component: login ko'); }
        this.isComputing = false;
      }
    );
    this.venueMesiService.isLoginComputing().subscribe(
      (lIsC: boolean) => {
        this.isComputing = lIsC;
      }
    )
  }
}
