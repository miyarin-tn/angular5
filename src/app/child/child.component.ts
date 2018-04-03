import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() myClick = new EventEmitter<boolean>();
  add_value() {
    this.myClick.emit(true);
  }
  sub_value() {
    this.myClick.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
