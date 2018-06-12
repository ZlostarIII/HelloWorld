import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent implements OnInit {

  col = "red";
  note = '';

  fontSizes = {
    "400":"400px",
    "200":"100px"
  };

  size = this.fontSizes["200"];

  constructor() { }

  ngOnInit() {
  }

  inputText;

  showInputText(event) {
    this.inputText = event.target.value;
  }

  addToList(inputValue) {
    this.inputText = inputValue.value;
  }

}
