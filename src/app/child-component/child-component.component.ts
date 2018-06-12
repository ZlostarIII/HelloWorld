import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
  <section>
    <h2>Child component</h2>
    <p>{{parentDataProp}}
      <button (click)="this.changeCase.emit('change case')">To upper case</button>
    </p>
  </section>
  `,
  styles: []
})
export class ChildComponentComponent implements OnInit {

  @Input() parentDataProp;
  @Output() changeCase = new EventEmitter();

  changeCaseStr: string = ""; 
  upper: string = "toUpperCase";
  lower: string = "toLowerCase";

  constructor() { }

  ngOnInit() {
  }

  childChangeCase() {}

}
