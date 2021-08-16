import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';

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
      return this.http.post('http://localhost:3000/users/register',user)
      .map(res => res);
  }
  authenticateUser(user: any) {
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user).map(res => res);
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization':this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/users/profile').map(res => res);
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

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
