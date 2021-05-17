import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cityList: string[] = ["London", "Mumbai", "Bali", "Krabi", "Kuala Lumpur"];
  weatherStats: any[] = [];

  constructor(public router: Router, public service: AppService) { }

  ngOnInit() {
    for (let city of this.cityList) {
      this.service.getWeatherDetails(city).subscribe((resData: any) => {
        this.weatherStats.push(resData);
      })
    }
  }

  openCard(name: string) {
    this.router.navigate(['city']);
    this.service.setNewCityInfo({
      city: name
    });
  }

}
