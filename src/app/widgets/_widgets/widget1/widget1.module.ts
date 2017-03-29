import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Widget1Component} from "./widget1.component";
import {TestService} from "./_services/test.service";
import {WidgetStorageModule} from "../widget-storage/widget-storage.module";

@NgModule({
  imports: [
    CommonModule,
    WidgetStorageModule.forRoot()
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
  // static forRoot() {
  //   return {
  //     ngModule: Widget1Module
  //   };
  // }
}
