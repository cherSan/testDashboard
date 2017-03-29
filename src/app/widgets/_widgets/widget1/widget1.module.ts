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
  private static prefix:string = 'widget1_';
  private static _idx:number = 0;
  private static modules = {};

  static current;

  static next() {
    Widget1Module._idx++;
    Widget1Module.current = Widget1Module.prefix + Widget1Module._idx;
    Widget1Module.modules[Widget1Module.current] = {};
    return Widget1Module.current;
  };

  static setParams = (_idx, params) => {
    Object.assign(Widget1Module.modules[_idx], params);
  };

  static getParams = (_idx) => {
    return Widget1Module.modules[_idx] || {};
  };

  static removeParams = (_idx) => {
    delete Widget1Module.modules[_idx];
  };

  constructor() {

  };



  // static forRoot() {
  //   return {
  //     ngModule: Widget1Module
  //   };
  // }
}
