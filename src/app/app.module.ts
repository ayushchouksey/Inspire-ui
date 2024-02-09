import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { NotificationCenterComponent } from './components/notification-center/notification-center.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NotificationCenterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    AgChartsAngularModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
