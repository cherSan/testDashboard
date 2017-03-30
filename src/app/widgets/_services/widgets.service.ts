import {Compiler, Injectable, Injector, NgModuleFactory, ReflectiveInjector} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {widgets} from "../widgets-list";

export class Widget {
  constructor(
    public component,
    public module: NgModuleFactory<any>,
    public injector: ReflectiveInjector
  ) {
  }
}
export interface WidgetList { [key: number]: Array<Widget>; }

@Injectable()
export class WidgetsService {

  widgetList = widgets.List;

  public  widgets: BehaviorSubject<WidgetList> = new BehaviorSubject({});

  private globalInjectors = {};


  addWidget = (name: string, column: number):void => {
    let widgets: WidgetList = this.widgets.getValue();

    if( !widgets[column] ) {
      widgets[column] = [];
    }

    if( this.widgetList[name].oneTimeInjector && !this.globalInjectors[name] ) {
      this.globalInjectors[name] = ReflectiveInjector.resolveAndCreate(this.widgetList[name].oneTimeInjector, this._injector)
    }
    let widget = new Widget(
        this.widgetList[name].component,
        this._compiler.compileModuleSync(this.widgetList[name].module),
        // this.widgetList[name].injector
        ReflectiveInjector.resolveAndCreate(this.widgetList[name].injector, this._injector)
    );

    widgets[column].push(widget);
    this.widgets.next(widgets);
  };

  constructor(
    private _compiler: Compiler,
    private _injector: Injector
  ) { }

}
