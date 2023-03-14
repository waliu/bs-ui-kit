import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestAlertComponent} from "./test-alert.component";
import {BsWebComponentNgModule} from "bs-web-component-ng";



@NgModule({
  declarations: [TestAlertComponent],
  imports: [
    CommonModule,
    BsWebComponentNgModule,
  ]
})
export class TestAlertModule { }
