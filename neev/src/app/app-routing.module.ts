import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VerifyComponent } from './verify/verify.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [{ path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainDashboardComponent, children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'forgotpassword', component: ForgotComponent },
        { path: 'verify', component: VerifyComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },
  { path: 'dash', component: DashboardComponent, canActivate: [AuthGuardService] }];

@NgModule({
  imports: [CommonModule,
RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
