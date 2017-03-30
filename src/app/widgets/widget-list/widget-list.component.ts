import {Component, Input, OnInit} from '@angular/core';
import {widgets} from "../widgets-list";
import {WidgetsService} from "../_services/widgets.service";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  public widgetList = widgets.Names;
  @Input('column')
  column: number = 0;

  private add = (name: string) => {
    this._service.addWidget(name, this.column);
  };

  constructor(
    private _service: WidgetsService
  ) { }

  ngOnInit() {
  }

}
