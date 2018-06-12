import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h1>Child list</h1>
    <ul>
      <li #product *ngFor="let product of childProductList">
        <span>{{product.name}} - </span>
        <span>{{product.price}}  </span>
      </li>
    </ul>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() childProductList;

  constructor() { }

  ngOnInit() {
  }

}
