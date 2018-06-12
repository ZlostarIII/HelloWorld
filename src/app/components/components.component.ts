import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  isValid = true;
  showH2 = true;

  constructor() { }

  ngOnInit() {
  }

}
