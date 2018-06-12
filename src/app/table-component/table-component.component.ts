import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  people = [
    { name: 'Maria', age: 35, city: 'Sofia' },
    { name: 'Ivan', age: 12, city: 'Plovdiv' },
    { name: 'Peter', age: 22, city: 'Varna' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
