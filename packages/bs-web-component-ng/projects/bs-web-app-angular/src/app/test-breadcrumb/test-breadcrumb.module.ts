import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsWebComponentNgModule} from "bs-web-component-ng";
import { TestBreadcrumbComponent } from './test-breadcrumb.component';



@NgModule({
  declarations: [
    TestBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestBreadcrumbModule { }
