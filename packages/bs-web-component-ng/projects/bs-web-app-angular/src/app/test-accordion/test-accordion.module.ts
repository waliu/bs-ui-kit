import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import { TestAccordionComponent } from './test-accordion.component';



@NgModule({
  declarations: [
    TestAccordionComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestAccordionModule { }
