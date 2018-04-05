import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = [
    { id: 1, name: 'Thanh Ngọc', phone: '0978329928' },
    { id: 2, name: 'Xuân Thịnh', phone: '01649512034' },
    { id: 3, name: 'Thùy Trinh', phone: '01656468067' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
