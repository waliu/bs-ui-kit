import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import {TestCollapseComponent} from './test-collapse.component';


@NgModule({
  declarations: [
    TestCollapseComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestCollapseModule {
}
