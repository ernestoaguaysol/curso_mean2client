import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {

  public identity;
  public token;

  public url: string;

  constructor(private http: Http) {
    this.url = GLOBAL.url;
  }

  singup(user_to_login: any, gethash = null) {

    if (gethash) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;

    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url+'login', params, {headers: headers})
                    .map(res => res.json());
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getToken () {
    let token = localStorage.getItem('token');
    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

}
