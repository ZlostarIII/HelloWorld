import { Component, OnInit, Directive, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-custom-directive-example',
  templateUrl: './custom-directive-example.component.html',
  styleUrls: ['./custom-directive-example.component.css']
})
export class CustomDirectiveExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExample {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = '#d12929';
  }

}
