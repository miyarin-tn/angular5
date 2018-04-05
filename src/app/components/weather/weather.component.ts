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

  getTemperature() {
    this.weather_service.getWeather(this.txt_city)
    .then(temp => {
      this.city = this.txt_city;
      this.temp = temp;
    })
    .catch(err => console.log(err));
  }

}
