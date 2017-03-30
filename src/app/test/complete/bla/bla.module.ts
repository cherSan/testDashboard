import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Test001Service} from "./test001.service";
import {CompleteComponent} from "../complete.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CompleteComponent
  ],
  entryComponents: [
    CompleteComponent
  ],
  providers: [
    Test001Service
  ]
})
export class BlaModule { }
