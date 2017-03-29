import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {
    path: "",
    loadChildren: "../dashboard/dashboard.module#DashboardModule",
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteApplicationModule { }
