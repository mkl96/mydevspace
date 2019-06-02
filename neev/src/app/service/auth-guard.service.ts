import { Injectable } from '@angular/core';
import { CanActivate } from 'npm/neev/node_modules/@angular/router/src/utils/preactivation';
import { AuthService } from 'npm/neev/src/app/service/auth.service';
import { Router, RouterStateSnapshot } from 'npm/neev/node_modules/@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    path: import("C:/Work/node_modules/npm/neev/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot[];
    route: import("C:/Work/node_modules/npm/neev/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user || localStorage.getItem("token") !== null) return true;

      this.router.navigate(['/main/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }
}
