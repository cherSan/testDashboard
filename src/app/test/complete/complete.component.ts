import {Component, Injectable} from '@angular/core';
import {Test001Service} from "./bla/test001.service";

@Injectable()
export class Greeter {
  constructor() {
    console.log('Greeter')
  }
  suffix = '!';
}

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent {
  constructor(public greeter: Greeter, public test001: Test001Service) {}
}

