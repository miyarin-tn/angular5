import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  name = '';
  phone = '';

  constructor(private activated_route: ActivatedRoute) { }

  ngOnInit() {
    this.activated_route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.name = params.get('name');
      this.phone = params.get('phone');
    });
  }

}
