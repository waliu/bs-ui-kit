import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestBadgeComponent} from "./test-badge.component";
import {BsWebComponentNgModule} from "bs-web-component-ng";
@NgModule({
  declarations: [TestBadgeComponent],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestBadgeModule { }
