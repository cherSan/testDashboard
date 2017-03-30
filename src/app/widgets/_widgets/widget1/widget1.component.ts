import {Component, Injectable, OnDestroy} from '@angular/core';
import {TestService} from "./_services/test.service";
import {WidgetStorageService} from "../../_services/widget-storage.service";

@Injectable()
export class Widget1Config {
  constructor() {
    console.log('Widget1Config init one time per Widget creation');
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
  public count: number = 0;
  constructor(
    private _config: Widget1Config, //Init only one time for each new widget (widgets.List.injector) (this widget)
    private _service: TestService, //Init & destroy each time when widget create and destroy (in module) (this widget)
    private _api: Widget1API, //Init only one time when this type of widget create (widgets.List.oneTimeInjector) (this type of widget)
    private _storage: WidgetStorageService //Access to personal provider from any widgets, Init only one time for each new widget (any type of widget)
  ) {
    this.count = _storage.getByKey('count');
    _service.setCount(this.count);
    _service.count.subscribe(val => {
      this.count = val;
      this._storage.set('count', this.count);
    })
  }

  add = () => {
    this._service.add();
  };

  ngOnDestroy() {
    console.log('destroy', this.count);
  }
}
