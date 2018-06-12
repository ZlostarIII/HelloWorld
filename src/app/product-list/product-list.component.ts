import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
  <section>
    <h2>Product list</h2>
    <app-product [childProductList]="products"></app-product>
    <app-add-product></app-add-product>
    <app-delete-product (deleteProduct)="deleteProductFromList($event)"></app-delete-product>
  </section>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "apples",
      price: 2.50
    },
    {
      name: "oranges",
      price: 1.50
    },
    {
      name: "bananas",
      price: 2.00
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addProductToList(event) {
    console.log(event);
    this.products.push(event);
  }

  deleteProductFromList(event) {
    console.log(event.target.value);
    this.products.pop();
  }

}
