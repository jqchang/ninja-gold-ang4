import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Location } from './location.component';

@NgModule({
  declarations: [
    AppComponent,
    Location
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, Location]
})
export class AppModule { }
