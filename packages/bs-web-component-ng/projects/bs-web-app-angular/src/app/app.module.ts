import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestAlertModule} from "./test-alert/test-alert.module";
import {BsWebComponentNgModule} from "bs-web-component-ng";
import {TestButtonModule} from "./test-button/test-button.module";
import {TestBadgeModule} from "./test-badge/test-badge.module";
import {TestCardsModule} from "./test-cards/test-cards.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestAlertModule,
    TestButtonModule,
    TestBadgeModule,
    TestCardsModule,
    BsWebComponentNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
