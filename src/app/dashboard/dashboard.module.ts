import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {WidgetsModule} from "../widgets/widgets.module";
import {DragulaModule} from "ng2-dragula";

const route: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule.forChild(route),
    DragulaModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
