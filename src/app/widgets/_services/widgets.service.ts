import {Compiler, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {widgets} from "../widgets-list";

export class Widget {
  constructor(
    public id: number,
    public component,
    public module,
    public baseModule
  ) {
  }
}
export interface WidgetList { [key: number]: Array<Widget>; }

@Injectable()
export class WidgetsService {

  widgetList = widgets.List;

  public widgets: BehaviorSubject<WidgetList> = new BehaviorSubject({});


  addWidget = (name: string, column: number):void => {
    let widgets: WidgetList = this.widgets.getValue();

    if( !widgets[column] ) {
      widgets[column] = [];
    }

    let widget = new Widget(
        this.widgetList[name].module.next(),
        this.widgetList[name].component,
        this._compiler.compileModuleSync(this.widgetList[name].module),
        this.widgetList[name].module
    );

    widgets[column].push(widget);
    this.widgets.next(widgets);
  };

  constructor(
    private _compiler: Compiler
  ) { }

}
