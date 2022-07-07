import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../model/city';



@Injectable({
  providedIn: 'root'
})
export class GeocodingService {


  private readonly BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

  constructor(private http: HttpClient ) { 
  }
  
  getCities(city: string): any {
    return this.http.get<any>(this.BASE_URL+"?name="+city);
  }
}
