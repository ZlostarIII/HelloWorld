import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products:any[];

  constructor() {
    this.products = this.fetchProducts();
  }

  ngOnInit() {}

  fetchProducts() {
    return [
      {
        "name": "apples",
        "price": 2.50
      },
      {
        "name": "oranges",
        "price": 1.50
      },
      {
        "name": "bananas",
        "price": 2.00
      }
    ];
  }

  addProduct(product) {
    console.log("Add prd", product);
    this.products.push(product);
    console.log("Add", this.products);
  }

  deleteProduct() {}

  editProduct() {}

}
