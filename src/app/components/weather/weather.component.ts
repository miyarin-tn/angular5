import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txt_city = '';
  city = '';
  temp = null;

  constructor(private weather_service: WeatherService) { }

  ngOnInit() {
  }

  get_temperature() {
    this.weather_service.get_weather(this.txt_city)
    .then(temp => {
      this.city = this.txt_city;
      this.temp = temp;
    })
    .catch(err => console.log(err));
  }

}
