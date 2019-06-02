import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      contact: new FormControl(null, Validators.required),
    });

  }

  ngOnInit() {
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }
  submit() {
    console.log(this.loginForm.value)

    if (this.loginForm.valid) {
      this._myservice.contact(this.loginForm.value)
        .subscribe(
        data => {
          if (data) {
            localStorage.setItem('contact', data.toString());
            this._router.navigate(['/main/verify']);
          }
          },
          error => { }
        );
    }
  }

  

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }

}
