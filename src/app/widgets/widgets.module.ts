import { NgModule } from '@angular/core';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {CommonModule} from "@angular/common";
import {WidgetsService} from "./_services/widgets.service";
import {TestService} from "./_widgets/widget1/_services/test.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WidgetListComponent
  ],
  declarations: [WidgetListComponent],
  providers: [
    WidgetsService,
    TestService
  ]
})
export class WidgetsModule {
  // static forRoot() {
  //   return {
  //     ngModule: WidgetsModule
  //   };
  // }
}
