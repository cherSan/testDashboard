import {Widget1Module} from "./_widgets/widget1/widget1.module";
import {Widget1Component} from "./_widgets/widget1/widget1.component";
import {Widget2Module} from "./_widgets/widget2/widget2.module";
import {Widget2Component} from "./_widgets/widget2/widget2.component";
import {TestService} from "./_widgets/widget1/_services/test.service";

export module widgets {
  export const List = {
    Widget1: {
      module: Widget1Module,
      component: Widget1Component,
    },
    Widget2: {
      module: Widget2Module,
      component: Widget2Component
    }
  };

  export const Names = Object.keys(List);
}
