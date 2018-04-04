import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  value = 0;
  change_value(is_add: boolean) {
    if(is_add) {
      this.value = this.value + 1;
    }
    else {
      if(this.value === 0) {
        this.value = 0;
      }
      else {
        this.value = this.value - 1;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
