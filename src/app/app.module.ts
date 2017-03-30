import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouteApplicationModule} from "./route-application/route-application.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouteApplicationModule,

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
