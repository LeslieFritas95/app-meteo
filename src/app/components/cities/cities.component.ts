import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { City } from 'src/app/model/city';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Output() onCityClicked: EventEmitter<any> = new EventEmitter();

  public filter : string =""
  public citiesArray: City[] = []
  constructor(private geoS : GeocodingService) { }

  ngOnInit(): void {
    // this.getWeather()
  }
  
  getCities(){
    this.geoS.getCities(this.filter).subscribe({
      next: (m: any) => this.citiesArray = m.results,
      error: (err: any) => console.log(err)
    })
  } 

  cerca(){
    this.getCities()
  }

  cercaMeteo(city: City){
    // console.log(city)
    this.onCityClicked.emit(city)
  }
}
