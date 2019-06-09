import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/service.service';
import { Router } from '@angular/router';
import { AuthService } from 'npm/neev/src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  username = '';
  constructor(private myService: MyserviceService, private auth: AuthService,
    private _router: Router) {
    this.myService.getUserName()
      .subscribe(
      data => {
        this.username = data.tokenuser[0].username;
      }
        //this.username = data.toString(),
          
        //error => this._router.navigate(['/main/login'])
      )
  }

  ngOnInit() {
  }

  logout() {
    if (localStorage.getItem("token") === null) {
      this.auth.logout();
      this._router.navigate(['/main/login']);
    } else {
      localStorage.removeItem('token');
      this._router.navigate(['/main/login']);
    }
  }

}
