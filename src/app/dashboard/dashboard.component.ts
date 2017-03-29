import {Component, ElementRef, Injectable, Injector, OnInit, ReflectiveInjector, ViewChild} from '@angular/core';
import {WidgetsService, Widget} from "../widgets/_services/widgets.service";
import {DragulaService} from "ng2-dragula";

interface Layout {
  items: Array<Widget>
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
  private _addWidget: boolean = false;

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
    private _dragula: DragulaService
  ) {
    this._service.widgets.subscribe((val) => {
      this.updateData(val);
    });
    _dragula.setOptions('tpl2', {
      removeOnSpill: true
    });

    _dragula.removeModel.subscribe((val, a) => {
      console.log('removeModel', val, a);
    })
  }

  dragstart = (a) => {
    console.log(a);
  }

  updateData = (val) => {
    this._addWidget = false;
    for( let index in val ) {
      if( this.layouts[index] ) {
        this.layouts[index].items = val[index];
      } else {
        this.layouts[this.layouts.length - 1].items = this.layouts[this.layouts.length - 1].items.concat(val[index]);
      }
    }
  };

  onDropModel = (args) => {
    console.log(args);
  }

  ngOnInit() {
  }

}
