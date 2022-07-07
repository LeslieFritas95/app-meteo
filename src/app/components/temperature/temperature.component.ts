import { Component, Input, OnInit } from '@angular/core';
import { HourlyForecast } from 'src/app/model/weather';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  @Input() selectedTemperature?: HourlyForecast;

  constructor() { }

  ngOnInit(): void {
  }

}
