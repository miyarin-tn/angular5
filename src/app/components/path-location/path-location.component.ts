import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-path-location',
  templateUrl: './path-location.component.html',
  styleUrls: ['./path-location.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class PathLocationComponent implements OnInit {

  location: Location;
  
  constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }

}
