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
  private static prefix:string = 'widget2_';
  private static _idx:number = 0;
  private static modules = {};

  static current;

  static next = () => {
    Widget2Module._idx++;
    Widget2Module.current = Widget2Module.prefix + Widget2Module._idx;
    return Widget2Module.current;
  };

  static setParams = (_idx, params) => {
    Object.assign(Widget2Module.modules[_idx], params);
  };

  static getParams = (_idx) => {
    return Widget2Module.modules[_idx];
  };

  static removeParams = (_idx) => {
    delete Widget2Module.modules[_idx];
  };
  // static forRoot() {
  //   return {
  //     ngModule: Widget2Module
  //   };
  // }
}
