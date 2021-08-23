import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }
  registerUser(user: any) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('users/register',user)
      .map(res => res);
  }
  updateUser(user: any) {
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.post('users/update',user,{headers: headers});
  }

  authenticateUser(user: any) {
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('users/authenticate',user).map(res => res);
  }

  getProfile() {
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get('users/profile', {headers: headers});
  }
  storeUserData(token:any,user:any){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
