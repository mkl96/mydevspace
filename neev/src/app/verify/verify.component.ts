import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  loginForm: FormGroup;
  contact: any; 
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      otp: new FormControl(null, Validators.required),
    });

  }

  ngOnInit() {
    this.contact = localStorage.getItem('contact');
    console.log("g" + this.contact);

      }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }


  verify() {
    console.log(this.loginForm.value);
    console.log(this.contact);

    if (this.loginForm.valid) {
      console.log("g" + this.contact)
      this._myservice.verify(this.loginForm.value,this.contact)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dash']);
          },
          error => { }
        );
    }
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }


}
