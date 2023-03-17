import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestAlertComponent} from "./test-alert/test-alert.component";
import {TestButtonComponent} from "./test-button/test-button.component";
import {TestBadgeComponent} from "./test-badge/test-badge.component";
import {TestCardsComponent} from "./test-cards/test-cards.component";
import {TestListGroupComponent} from "./test-list-group/test-list-group.component";

const routes: Routes = [
  {path: 'test-alert', component: TestAlertComponent},
  {path: 'test-button', component: TestButtonComponent},
  {path: 'test-badge', component: TestBadgeComponent},
  {path: 'test-cards', component: TestCardsComponent},
  {path: 'test-list-group', component: TestListGroupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
