import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BsWebComponentNgComponent } from './bs-web-component-ng.component';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'bs-web-component/loader';

@NgModule({
  declarations: [
    BsWebComponentNgComponent,
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    BsWebComponentNgComponent,
    ...DIRECTIVES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ]
})
export class BsWebComponentNgModule { }
