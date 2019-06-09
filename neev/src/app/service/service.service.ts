import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body: any) {
    return this._http.post('http://localhost:3000/api/register', body, {
      observe: 'body'
    });
  }

  login(body: any) {
    return this._http.post('http://localhost:3000/api/login', body, {
      observe: 'body'
    });
  }

  contact(body: any) {
    return this._http.post('http://localhost:3000/api/contact', body, {
      observe: 'body'
    });
  }

  verify(body: any, contact: any) {
    return this._http.post('http://localhost:3000/api/verify'+'/'+contact, body, {
      observe: 'body'
    });
  }

  getUserName() {
    return this._http.get<any>('http://localhost:3000/api/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  googlelogin() {
    return this._http.get('http://localhost:3000/api/auth/google');
  }

}
