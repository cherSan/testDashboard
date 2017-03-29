import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Widget2Component} from "./widget2.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Widget2Component
  ],
  declarations: [
    Widget2Component
  ],
  entryComponents: [
    Widget2Component
  ],
  providers: [
  ],
  bootstrap: [
    Widget2Component
  ]
})
export class Widget2Module {
  static forRoot() {
    return {
      ngModule: Widget2Module
    };
  }
}
