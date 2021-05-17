import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() weatherDetails!: any;
  sunrise!: Date;
  sunRiseTime!: string;
  sunset!: Date;
  sunSetTime!: string;
  currentDate = new Date();
  isDay: any;
  weather: any;

  constructor() { }

  ngOnInit() {
    this.weather = this.weatherDetails;
    this.sunrise = new Date(this.weatherDetails.sys.sunrise * 1000);
    this.sunRiseTime = this.sunrise.toString().slice(16, 21);
    this.sunset = new Date(this.weatherDetails.sys.sunset * 1000);
    this.sunSetTime = this.sunset.toString().slice(16, 21);
    this.isDay = (this.currentDate.getTime() < this.sunset.getTime());
  }
}
