import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {NavbarComponent} from './navbar/navbar.component';
import {RoutingModule} from './routing/routing.module';
import {MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
