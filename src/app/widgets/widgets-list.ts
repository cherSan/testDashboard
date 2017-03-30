import {Widget1Module} from "./_widgets/widget1/widget1.module";
import {Widget1API, Widget1Component, Widget1Config} from "./_widgets/widget1/widget1.component";
import {Widget2Module} from "./_widgets/widget2/widget2.module";
import {Widget2Component} from "./_widgets/widget2/widget2.component";

export module widgets {
  export const List = {
    Widget1: {
      module: Widget1Module,
      component: Widget1Component,
      injector: [Widget1Config],
      oneTimeInjector: [Widget1API]
    },
    Widget2: {
      module: Widget2Module,
      component: Widget2Component,
      injector: [],
      oneTimeInjector: []
    }
  };

  export const Names = Object.keys(List);
}
