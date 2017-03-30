import {Component, ElementRef, Injectable, Injector, OnInit, ReflectiveInjector, ViewChild} from '@angular/core';
import {WidgetsService, Widget} from "../widgets/_services/widgets.service";
import {DragulaService} from "ng2-dragula";
import {widgets} from "../widgets/widgets-list";
import {Widget1Config} from "../widgets/_widgets/widget1/widget1.component";

interface Layout {
  items: Array<Widget>
}

@Injectable()
export class Test001 {
  suffix = 3;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('tpl2') tpl2:ElementRef;
  @ViewChild('tpl3') tpl3:ElementRef;

  private _teamplate: ElementRef;

  private _column: number = 0;
  public _addWidget: boolean = false;

  private layouts: Array<Layout> = [];

  public addWidget = (column: number) => {
    this._column = column;
    this._addWidget = true;
  };

  setColumns = (column: number) => {
    this.layouts = [];
    for (let i = 0; i < column; i++) {
      this.layouts.push({items:[]});
    }
    this.updateData(this._service.widgets.getValue());
  };

  constructor(
    private _service: WidgetsService,
    private _dragula: DragulaService,
  ) {

    this._service.widgets.subscribe((val) => {
      this.updateData(val);
    });

    // _dragula.setOptions('tpl2', {
    //   removeOnSpill: true
    // });

    // _dragula.removeModel.subscribe((val, a) => {
    //   console.log('removeModel', val, a);
    // });
  }

  private updateData = (val) => {
    this._addWidget = false;
    for( let index in val ) {
      if( this.layouts[index] ) {
        this.layouts[index].items = val[index];

        let b = val[index][0].injector.get(Widget1Config);

        console.log(b);

      } else {
        this.layouts[this.layouts.length - 1].items = this.layouts[this.layouts.length - 1].items.concat(val[index]);
      }
    }
  };

  ngOnInit() {
  }

}
