import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { CodeIconPipe } from './components/pipes/code-icon/code-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MeteoForecastComponent,
    TemperatureComponent,
    CodeIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
