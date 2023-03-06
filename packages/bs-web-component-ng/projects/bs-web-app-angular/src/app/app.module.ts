import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsWebComponentNgModule} from "bs-web-component-ng";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsWebComponentNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
