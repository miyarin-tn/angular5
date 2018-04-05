import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() myClick = new EventEmitter<boolean>();
  addValue() {
    this.myClick.emit(true);
  }
  subValue() {
    this.myClick.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
