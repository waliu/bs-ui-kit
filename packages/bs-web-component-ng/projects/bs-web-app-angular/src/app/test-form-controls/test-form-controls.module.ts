import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormControlsComponent } from './test-form-controls.component';
import {BsWebComponentNgModule} from "bs-web-component-ng";



@NgModule({
  declarations: [
    TestFormControlsComponent
  ],
  imports: [
    CommonModule,
    BsWebComponentNgModule
  ]
})
export class TestFormControlsModule { }
