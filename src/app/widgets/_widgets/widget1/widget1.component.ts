import {Component, Injectable, OnDestroy} from '@angular/core';
import {TestService} from "./_services/test.service";

@Injectable()
export class Widget1Config {
  constructor() {
    console.log('Widget1Config');
  }
  private count: number = 0;
  save = (value: number) => {
    this.count = value;
  };
  restore = (): number => {
    return this.count;
  };
}

@Injectable()
export class Widget1API {
  constructor() {
    console.log('API one time init');
  }
}

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnDestroy {
  private count: number = 0;
  constructor(
    private _config: Widget1Config,
    private _service: TestService,
  ) {
    setTimeout(() => {
      this.count = _config.restore();

      console.log(this.count);

      _service.setCount(this.count);

      _service.count.subscribe(val => {
        this.count = val;
      })
    }, 0)

  }

  add = () => {
    this._service.add();
  };

  ngOnDestroy() {
    console.log('destroy', this.count);
    this._config.save(this.count);
  }
}
