import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `
    <section>
      <h2>Parent component</h2>
      <label>Product name:
        <input type="text" style="width:20em;"
        [(ngModel)]="parentData" placeholder="displayed in the child component">
      </label>
      <app-child-component [parentDataProp]="parentData" (changeCase)="respondToChange($event)"></app-child-component>
    </section>
  `,
  styles: []
})
export class ParentComponentComponent implements OnInit {

  parentData = "";
  constructor() { }

  ngOnInit() {
  }

  respondToChange(event) {
    console.log('Event: ', event.target.value);
    this.parentData = this.parentData.toUpperCase();
  }

}
