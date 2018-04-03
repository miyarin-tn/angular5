import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arr_people = [
    {name: 'Thanh Ngọc', age: 27},
    {name: 'Xuân Thịnh', age: 25},
    {name: 'Thùy Trinh', age: 25}
  ]

  constructor() { }

  ngOnInit() {
  }

}
