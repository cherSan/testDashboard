import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Widget1Module} from "../widget1.module";

@Injectable()
export class TestService {

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

  setCount = (count: number) => {
    this.count.next(count || 0);
  };

  constructor() {
    console.log("TestService init each time when component creation")
  }

  ngOnDestroy() {
  }

}
