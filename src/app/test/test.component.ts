import {Compiler, Component, Injector, NgModuleFactory, ReflectiveInjector} from '@angular/core';
import {CompleteComponent, Greeter} from "./complete/complete.component";
import {BlaModule} from "./complete/bla/bla.module";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  CompleteComponent = CompleteComponent;
  myInjector: Injector;
  module: NgModuleFactory<any>;
  myContent = [[document.createTextNode('Ahoj')], [document.createTextNode('Svet')]];

  constructor(injector: Injector, _compiler: Compiler) {
    this.myInjector = ReflectiveInjector.resolveAndCreate([Greeter], injector);
    this.module = _compiler.compileModuleSync(BlaModule);
  }

}
