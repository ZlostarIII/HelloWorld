import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id="app-header"]',
  template: `<h1>Header</h1>
  <p>Par 1</p>`,
  styles: ['h1 { color:red; } #myH { color:blue; }']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
