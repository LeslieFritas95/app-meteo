import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HourlyForecast } from 'src/app/model/weather';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {
  
  public forecastArray: HourlyForecast[] = []; 

  constructor(private meteoS: MeteoService ) { }

  ngOnInit(): void {
    this.getWeather()

  }
  
  getWeather(){
    this.meteoS.getWeather().subscribe({
      next: m => this.forecastArray = m,
      error: err => console.log(err)
    })
  } 


}
