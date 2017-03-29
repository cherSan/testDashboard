import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Widget1Module} from "../widget1.module";

@Injectable()
export class TestService {

  private _id;

  public count: BehaviorSubject<number> = new BehaviorSubject(0);

  add = () => {
    let val = this.count.getValue();
    val++;
    this.count.next(val);
  };

  rem = () => {
    let val = this.count.getValue();
    val--;
    this.count.next(val);
  };

  constructor() {
    this._id = Widget1Module.current;

    let params = Widget1Module.getParams(this._id),
        count = params.count || 0;

    this.count.next(count);
  }

  ngOnDestroy() {
    // Widget1Module.setParams(this._id, {count: this.count.getValue()});
  }

}
