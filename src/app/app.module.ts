import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StackedBarChartComponent } from './time-chart/stacked-bar-chart/stacked-bar-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/data.service';
import { TimeChartComponent } from './time-chart/time-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    StackedBarChartComponent,
    TimeChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
