import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'login', component: AdminDashboardComponent },
]



@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
