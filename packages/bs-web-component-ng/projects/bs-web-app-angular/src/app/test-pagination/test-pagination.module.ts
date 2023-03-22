import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import { TestPaginationComponent } from './test-pagination.component';



@NgModule({
  declarations: [
    TestPaginationComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestPaginationModule { }
