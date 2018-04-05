import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildsComponent } from '../childs/childs.component';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  @ViewChild(ChildsComponent)
  myChild: ChildsComponent;
  addChild() {
    this.myChild.value++;
  }

  constructor() { }

  ngOnInit() {
  }

}
