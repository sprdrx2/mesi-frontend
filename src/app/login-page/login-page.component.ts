import { Component, OnInit } from '@angular/core';
import { VenueMesiService } from '../venue-mesi.service';

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

  constructor(private venueMesiService: VenueMesiService) { }

  ngOnInit() {
  }

  async testLogin() {
    let userL = this.userLogin; let userP = this.userPassword;
    this.isComputing = true;
    await this.venueMesiService.testLogin(userL, userP);
    if (this.venueMesiService.isUserLoggued()) {
      console.log('login ok');
      this.credentialsTested = true; this.credentialsOK = true;
    } else {
      console.log('login ko');
      this.credentialsTested = true; this.credentialsOK = false;
    }
    this.isComputing = false;
  }
}
