import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
