import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestButtonComponent} from "./test-button.component";
import {BsWebComponentNgModule} from "bs-web-component-ng";



@NgModule({
  declarations: [TestButtonComponent],
  imports: [
    CommonModule,
    BsWebComponentNgModule,
  ]
})
export class TestButtonModule { }
