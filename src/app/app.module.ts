import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YelpService } from './yelp.service';
import { VenueMapComponent } from './venue-map/venue-map.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueMapComponent
  ],
  imports: [
  	BrowserModule,
	AgmCoreModule.forRoot({ apiKey: 'AIzaSyDFlhYfOtWnmS542HA5XvTUh2GV5f6mxIM' }),
	FormsModule,
	HttpClientModule
  ],
  providers: [YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
