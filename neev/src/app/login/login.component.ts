import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _myservice: MyserviceService,
    private authservice: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
    this._router.navigate(['/dash']);
 
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {

    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
        data => {
          console.log(data)
          if (data) {
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dash']);
          }
          },
          error => { }
        );
    }
  }

  movetoforgotpassword() {
    this._router.navigate(['../forgotpassword'], { relativeTo: this._activatedRoute });
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }

  vendor() {
    this._router.navigate(['../vendor/login'], { relativeTo: this._activatedRoute });
  }
  googlelogin() {
    this.authservice.login();
  }
}
