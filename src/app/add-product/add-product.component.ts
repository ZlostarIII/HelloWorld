import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-add-product',
  template: `
    <h1>Add product</h1>
    <input #pname type="text" placeholder="name of the product">
    <input #pprice type="text" placeholder="price">
    <button (click)="this.addProduct.emit({ 'name': pname.value, 'price': pprice.value })">Add</button>
    <button (click)="addProductSrv({ 'name': pname.value, 'price': pprice.value })">Add from service</button>
  `,
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() addProduct = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  addProductSrv(name, price) {
    let productsService = new ProductsService();
    productsService.addProduct(
      {
        "name": name,
        "price": price
      }
    );
  }
}
