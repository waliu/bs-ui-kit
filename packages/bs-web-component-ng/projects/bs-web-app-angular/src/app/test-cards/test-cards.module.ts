import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestCardsComponent} from "./test-cards.component";
import {BsWebComponentNgModule} from "bs-web-component-ng";

@NgModule({
  declarations: [TestCardsComponent],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestCardsModule { }
