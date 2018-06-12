import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings-labs',
  template: `
    <p>Template interpolation: {{templateInterpolation}}</p>
    <p [class]="classValue">prioperty binding</p>
    <button (click)="changeBG()">Change background</button>
    <hr>
    <label>user name: <input type="text" [(ngModel)]="userName" (keyup)="checkUserName()" placeholder="enter your name">
    <div>Show name here: {{userName}}</div>
  `,
  styleUrls: ['./data-bindings-labs.component.css']
})
export class DataBindingsLabsComponent implements OnInit {

  templateInterpolation: any = "template interpolation test";
  userName: string = "Vlado";

  // CSS classes
  classValue: string = "";
  red = "red";
  blue = "blue";

  constructor() { }

  ngOnInit() {
  }

  changeBG() {
    console.log('Changed');
    if (this.classValue === "red") {
      this.classValue = this.blue ;
    } else {
      this.classValue = this.red;
    }
  }

  checkUserName() {
    console.log(`Key up: ${this.userName}`);
  }

}
