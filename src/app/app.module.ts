import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YelpService } from './yelp.service';
import { VenueMapComponent } from './venue-map/venue-map.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueMesiService } from './venue-mesi.service';
import { MesiVenueComponent } from './mesi-venue/mesi-venue.component';
import { VenueMesiMarkerComponent } from './venue-mesi-marker/venue-mesi-marker.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MesiVenueFormComponent } from './mesi-venue-form/mesi-venue-form.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { RouterModule, Routes } from '@angular/router';
import { UglyHomeComponentComponent } from './ugly-home-component/ugly-home-component.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { VenuePageComponent } from './venue-page/venue-page.component';

const mesiRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'home', component: UglyHomeComponentComponent },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'search', component: SearchEngineComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'venue/:yelp_id', component: VenuePageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    VenueMapComponent,
    VenueListComponent,
    MesiVenueComponent,
    VenueMesiMarkerComponent,
    MesiVenueFormComponent,
    UglyHomeComponentComponent,
    WelcomeScreenComponent,
    SearchBarComponent,
    SearchEngineComponent,
    LoginPageComponent,
    VenuePageComponent,
  ],
  imports: [
  BrowserModule,
  AgmCoreModule.forRoot({ apiKey: 'AIzaSyDFlhYfOtWnmS542HA5XvTUh2GV5f6mxIM' }),
  FormsModule,
  HttpClientModule,
  NgbModule,
  AgmSnazzyInfoWindowModule,
  GooglePlaceModule,
  RouterModule.forRoot(
    mesiRoutes,
    { enableTracing: false, onSameUrlNavigation: 'reload' } // <-- debugging purposes only
  )
  ],
  providers: [YelpService, VenueMesiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
