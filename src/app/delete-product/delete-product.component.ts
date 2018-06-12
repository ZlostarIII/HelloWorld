import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  template: `
    <h1>Delete product</h1>
    <button (click)="this.deleteProduct.emit()">Delete</button>
  `,  
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Output() deleteProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
