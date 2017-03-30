import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from './test.component';
import {RouterModule, Routes} from "@angular/router";
import {CompleteComponent} from "./complete/complete.component";

const route: Routes = [
  {
    path: "",
    component: TestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule { }
