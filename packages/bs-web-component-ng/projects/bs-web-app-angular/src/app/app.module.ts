import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestAlertModule} from "./test-alert/test-alert.module";
import {BsWebComponentNgModule} from "bs-web-component-ng";
import {TestButtonModule} from "./test-button/test-button.module";
import {TestBadgeModule} from "./test-badge/test-badge.module";
import {TestCardsModule} from "./test-cards/test-cards.module";
import {TestFormControlsModule} from "./test-form-controls/test-form-controls.module";
import {TestListGroupModule} from "./test-list-group/test-list-group.module";
import {TestCollapseModule} from "./test-collapse/test-collapse.module";
import {TestCarouselModule} from "./test-carousel/test-carousel.module";
import {TestPaginationModule} from "./test-pagination/test-pagination.module";
import {TestNavbarModule} from "./test-navbar/test-navbar.module";
import {TestAccordionModule} from "./test-accordion/test-accordion.module";
import {TestBreadcrumbModule} from "./test-breadcrumb/test-breadcrumb.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestNavbarModule,
    TestAccordionModule,
    TestAlertModule,
    TestButtonModule,
    TestBadgeModule,
    TestBreadcrumbModule,
    TestCardsModule,
    TestFormControlsModule,
    TestListGroupModule,
    TestCollapseModule,
    TestCarouselModule,
    TestPaginationModule,
    BsWebComponentNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
