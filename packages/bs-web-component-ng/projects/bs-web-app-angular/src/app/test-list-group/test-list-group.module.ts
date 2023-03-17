import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import { TestListGroupComponent } from './test-list-group.component';


@NgModule({
  declarations: [
    TestListGroupComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestListGroupModule { }
