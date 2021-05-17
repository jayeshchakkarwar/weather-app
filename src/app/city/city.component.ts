import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  forecastRes: any = {};
  list: any = [];
  updateCityInfo: any;

  constructor(public service: AppService) { }

  ngOnInit() {
    this.service.getNewCityInfo().subscribe(name => {
      this.updateCityInfo = name;
    })
    this.service.getForecastDetails(this.updateCityInfo.city).subscribe((res: any) => {
      this.forecastRes = res;
      res.list.forEach(
        (weatherItem: any) => {
          if (weatherItem && weatherItem['dt_txt'].includes('09:00')) {
            this.list.push(weatherItem);
          }
        });
    })
  }

}
