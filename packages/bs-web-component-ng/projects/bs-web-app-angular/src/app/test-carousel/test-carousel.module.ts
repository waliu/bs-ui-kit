import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import { TestCarouselComponent } from './test-carousel.component';



@NgModule({
  declarations: [
    TestCarouselComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestCarouselModule { }
