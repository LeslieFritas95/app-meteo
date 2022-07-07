import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { CodeIconPipe } from './components/pipes/code-icon/code-icon.pipe';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './components/cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoForecastComponent,
    TemperatureComponent,
    CodeIconPipe,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
