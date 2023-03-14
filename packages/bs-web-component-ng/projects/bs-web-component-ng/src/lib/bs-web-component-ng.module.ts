import {APP_INITIALIZER, NgModule} from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'bs-web-component/loader';

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
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
