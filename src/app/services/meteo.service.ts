
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { map, Observable, retry } from 'rxjs';
import { HourlyForecast } from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private readonly BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=41.8955&longitude=12.4823&hourly=temperature_2m,relativehumidity_2m,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin"

  constructor(private http: HttpClient ) { 
  }
  
  getWeather() {
    return this.http.get<HourlyForecast[]>(this.BASE_URL).pipe(
      map(data => this.parserMeteoData(data))
      );
    }
    
  parserMeteoData(data: any){ 
    console.log(data); 
    const tempArray = data.hourly.temperature_2m; 
    const timeArray = data.hourly.time;
    const humidityArray =  data.hourly.relativehumidity_2m;
    const rainArray = data.hourly.rain;
    const codeArray = data.hourly.weathercode;
    const cloudCoverArray = data.hourly.cloudcover;
    const windSpeedArray = data.hourly.windspeed_10m;
    const windDiretionArray = data.hourly.winddirection_10m

    const forecastArray: HourlyForecast[] = []

    for (let i = 0; i < tempArray.length; i++) {
      const temperature = tempArray[i];
      const time = timeArray[i]; 

      const forecast: HourlyForecast = {date: time, temperature: temperature, humidity: humidityArray, rain: rainArray, code: codeArray, cloudCover: cloudCoverArray, windSpeed: windSpeedArray, windDiretion: windDiretionArray
        }

      forecastArray.push(forecast)
    }
    return forecastArray; 

    //  con map:
    // return data.hourly.time.map((time: string, index: number) => { 
    //   return {date: time, temperature: data.hourly.temperature_2m[index]}
    // })
  }
    
}
