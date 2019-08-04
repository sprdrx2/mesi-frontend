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

@NgModule({
  declarations: [
    AppComponent,
    VenueMapComponent,
    VenueListComponent,
    MesiVenueComponent,
    VenueMesiMarkerComponent,
    MesiVenueFormComponent,
  ],
  imports: [
  BrowserModule,
  AgmCoreModule.forRoot({ apiKey: 'AIzaSyDFlhYfOtWnmS542HA5XvTUh2GV5f6mxIM' }),
  FormsModule,
  HttpClientModule,
  NgbModule,
  AgmSnazzyInfoWindowModule
  ],
  providers: [YelpService, VenueMesiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
