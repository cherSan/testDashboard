import { Component, OnInit } from '@angular/core';
import {TestService} from "./_services/test.service";
import {Widget1Module} from "./widget1.module";

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {

  private _id;

  add = () => {
    this._service.add();
  };

  count: number = 0;

  constructor(
    private _service: TestService
  ) {
    this._id = Widget1Module.current;

    _service.count.subscribe(val => {
      this.count = val;
      Widget1Module.setParams(this._id, {count: val});
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._service.count.unsubscribe();
  }

}
