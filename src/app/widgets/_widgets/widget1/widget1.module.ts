import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Widget1Component} from "./widget1.component";
import {TestService} from "./_services/test.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Widget1Component
  ],
  entryComponents: [
    Widget1Component,
  ],
  providers: [
    TestService
  ]
})
export class Widget1Module {

}
