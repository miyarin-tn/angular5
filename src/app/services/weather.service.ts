import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  get_weather(city: String) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=293d6dbbb56fc20bc4080f5b7db3e11d&units=metric&q=' + city;
    return this.http.get(url)
    .toPromise()
    .then(res => res.json())
    .then(resJson => resJson.main.temp);
  }

}
