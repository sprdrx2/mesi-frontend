import { Injectable } from '@angular/core';
import { VenueMesi } from './venue-mesi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YelpVenue } from './yelp-venue';
import { YelpService } from './yelp.service';
import { MesiBackendResponse } from './mesi-backend-response';
import { Router } from '@angular/router';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { UserMesi } from './user-mesi';


@Injectable({
  providedIn: 'root'
})

export class VenueMesiService {
  private venueMesiApiAddress = 'http://localhost:8000';
  private venueMesiApiCompareAddress   = this.venueMesiApiAddress + '/venues/compare';
  private venueMesiApiCreateAddress    = this.venueMesiApiAddress + '/venue/create';
  private venueMesiApiUpdateAddress    = this.venueMesiApiAddress + '/venue/update';
  private venueMesiApiTestLoginAddress = this.venueMesiApiAddress + '/user/testlogin';
  private userMesiApiCreateAddress = this.venueMesiApiAddress + '/user/signin';
  private venueAddress = this.venueMesiApiAddress + '/venue';

  private userPassword: string;
  private userLogin: string;
  private userIsLoggued = false;
  private currentUserHttpHeaders: HttpHeaders;
  private currentUserLogin;
  private updatedUserIsLoggued: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private updatedLoginIsComputing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  mesiVenues;

  constructor(private httpClient: HttpClient, private yelpVenueService: YelpService) { this.userIsLoggued = false; }


  async compare(yelpVenues: Array<YelpVenue>) {
     await this.httpClient.post(this.venueMesiApiCompareAddress, yelpVenues).toPromise().then((data) => this.mesiVenues = data);
    console.log('Backend:'); console.log(this.mesiVenues);
    return this.mesiVenues;
  }

  async getVenues(location: String) {
    const yelpVenues: Array<YelpVenue> = await this.yelpVenueService.getVenues(location);
    return this.compare(yelpVenues);
  }

  async createOrUpdateVenue(venue: VenueMesi) {
    let newVenue: VenueMesi;
    if (!venue.knownStatus) {
      await this.httpClient.post(this.venueMesiApiCreateAddress, venue, { headers: this.currentUserHttpHeaders }).toPromise().then((data: VenueMesi) => newVenue = data);
    } else {
      await this.httpClient.put(this.venueMesiApiUpdateAddress, venue, { headers: this.currentUserHttpHeaders }).toPromise().then((data: VenueMesi) => newVenue = data);
    }
    console.log('Backend response: '); console.log(newVenue);
    return newVenue;
  }

  async testLogin(login: string, password: string) {
    this.updatedLoginIsComputing.next(true);
    console.log('essai connexion, login: ' +  login);
    const headers = new HttpHeaders ({
        'Authorization': 'Basic ' + btoa(login + ':' + password)
    });
    const httpOptions = { headers: headers };
    await this.httpClient.get(this.venueMesiApiTestLoginAddress, httpOptions).toPromise().then(
      (data) => {
        console.log('login ok');
        this.updatedUserIsLoggued.next(true);
        this.currentUserLogin = login;
        this.currentUserHttpHeaders = headers;
      }, (error) => { this.updatedUserIsLoggued.next(false); console.log('login ko'); }).catch(
      (err) => { this.updatedUserIsLoggued.next(false); console.log('login nok'); }
      );
      this.updatedLoginIsComputing.next(false);
  }

  isUserLoggued(): Observable<boolean> {
    return this.updatedUserIsLoggued;
  }

  isLoginComputing(): Observable<boolean> {
    return this.updatedLoginIsComputing;
  }

  getCurrentUserLogin() { return this.currentUserLogin; }

  async getVenue(yelp_id: String) {
    let venueEdit: VenueMesi;
    await this.httpClient.get(this.venueAddress + '/' + yelp_id).toPromise().then((data: VenueMesi) => venueEdit = data);
    return venueEdit;
  }

  async createUser(user: UserMesi) {
    let newUser: UserMesi;
    await this.httpClient.post(this.userMesiApiCreateAddress, user).toPromise().then((data: UserMesi) => newUser = data);
    console.log('Backend response: '); console.log(newUser);
    const headers = new HttpHeaders ({
      'Authorization': 'Basic ' + btoa(user.email + ':' + user.password)
    });
    this.currentUserHttpHeaders = headers;
    this.updatedUserIsLoggued.next(true);
    this.currentUserLogin = user.email;
    return newUser;
  }

  logOut() {
    this.currentUserHttpHeaders = null;
    this.updatedUserIsLoggued.next(false);
    this.currentUserLogin = '';
  }

}
