import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import { TestNavbarComponent } from './test-navbar.component';



@NgModule({
  declarations: [
    TestNavbarComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestNavbarModule { }
