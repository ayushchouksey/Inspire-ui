import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationCenterComponent } from './components/notification-center/notification-center.component';

const routes: Routes = [
  {
    path:"dashboard/:posId",
    component:DashboardComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"notification-center",
    component:NotificationCenterComponent
  },
  {
    path:"**",
    redirectTo:"dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
