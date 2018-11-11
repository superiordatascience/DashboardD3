import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as d3 from 'd3';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SvgDotComponent } from './svg-dot/svg-dot.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DashboardComponent,
    SvgDotComponent,
    LineChart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
