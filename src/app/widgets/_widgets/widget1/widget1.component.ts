import { Component, OnInit } from '@angular/core';
import {TestService} from "./_services/test.service";
import {Widget1Module} from "./widget1.module";
import {StorageService} from "../widget-storage/storage.service";

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {

  add = () => {
    this._service.add();
  };

  count: number = 123;

  constructor(
    private _service: TestService,
    private _storage: StorageService
  ) {
    _service.count.subscribe(val => this.count = val);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._service.count.unsubscribe();
  }

}
