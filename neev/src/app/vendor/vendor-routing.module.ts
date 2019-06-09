import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VendorLoginComponent } from '../vendor/vendor-login/vendor-login.component';

const routes: Routes = [
  { path: 'login', component: VendorLoginComponent },
]



@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class VendorRoutingModule { }
