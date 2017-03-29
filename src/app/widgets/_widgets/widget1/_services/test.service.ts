import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

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

  constructor() { }

  ngOnDestroy() {
  }

}
