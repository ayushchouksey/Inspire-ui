import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { NotificationCenterComponent } from './components/notification-center/notification-center.component';

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
    GoogleMapsModule,
    TableModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBell,
      faUser
    );
  }
}
