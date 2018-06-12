import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  styleUrls: ['./pipe-example.component.css'],
  template: `
  <h2>{{ name | uppercase }}</h2>
  <h2> Currency: {{ 10.99 | currency :locale | uppercase }}</h2>
  <p>Date: {{ '2018-01-15T09:03:01+0900' | date }}</p>
  <p>Date: {{ '2018-01-15T09:03:01+0900' | date:'y MMMM - EEEE d' }}</p>
  `
})
export class PipeExampleComponent implements OnInit {

  name = "frank";
  constructor() { }

  ngOnInit() {
  }

}

@Pipe({
  name: 'pipeTest'
})
export class PipeTestPipe implements PipeTransform {

  // args? for optional params
  transform(value: any, args?: any): any {
    return null;
  }

}