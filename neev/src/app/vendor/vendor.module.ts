import { NgModule } from '@angular/core';
import { VendorLoginComponent } from '../vendor/vendor-login/vendor-login.component';
import { VendorRoutingModule } from '../vendor/vendor-routing.module';

@NgModule({
  declarations: [
    VendorLoginComponent
  ],
  imports: [
    VendorRoutingModule
  ]
})
export class VendorModule { }
