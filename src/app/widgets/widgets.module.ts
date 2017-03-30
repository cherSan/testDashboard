import { NgModule } from '@angular/core';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {CommonModule} from "@angular/common";
import {WidgetsService} from "./_services/widgets.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WidgetListComponent
  ],
  declarations: [WidgetListComponent],
  providers: [
    WidgetsService
  ]
})
export class WidgetsModule {
  // static forRoot() {
  //   return {
  //     ngModule: WidgetsModule
  //   };
  // }
}
