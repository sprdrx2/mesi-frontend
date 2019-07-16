import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YelpService } from './yelp.service';

@NgModule({
  declarations: [
    AppComponent
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
