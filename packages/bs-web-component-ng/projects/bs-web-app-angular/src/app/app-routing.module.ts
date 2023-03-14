import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestAlertComponent} from "./test-alert/test-alert.component";
import {TestButtonComponent} from "./test-button/test-button.component";

const routes: Routes = [
  {path: 'test-alert', component: TestAlertComponent},
  {path: 'test-button', component: TestButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
