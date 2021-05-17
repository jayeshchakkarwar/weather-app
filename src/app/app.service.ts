import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  weatherApi = "http://api.openweathermap.org/data/2.5/weather?appid=3d8b309701a13f65b660fa2c64cdc517&units=metric";
  forecastApi = "http://api.openweathermap.org/data/2.5/forecast?appid=3d8b309701a13f65b660fa2c64cdc517&units=metric";
  
  constructor(public http: HttpClient) { }

  private currentCity = new BehaviorSubject<any>({
    city: 'London'
  });

  setNewCityInfo(city: any) {
    this.currentCity.next(city);
  }

  getNewCityInfo() {
    return this.currentCity.asObservable();
  }

  getWeatherDetails(city: string): any {
    let url = `${this.weatherApi}&q=${city}`;
    return this.http.get(url);
  }

  getForecastDetails(city: string): any{
    let url = `${this.forecastApi}&q=${city}`;
    return this.http.get(url);
  }
}
