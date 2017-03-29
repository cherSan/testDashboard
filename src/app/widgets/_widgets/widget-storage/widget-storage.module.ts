import { NgModule } from '@angular/core';
import {StorageService} from "./storage.service";

@NgModule({

})
export class WidgetStorageModule {
  static forRoot() {
    return {
      ngModule: WidgetStorageModule,
      providers: [
        StorageService
      ]
    };
  }
}
