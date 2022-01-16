import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
export interface AuthResponseData{
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}
@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient, private route: Router){}
  user = new BehaviorSubject<User>(null);
  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOQDJJYFYEE9GxnHkRi873vkfzNP7sQ5E', {
        email: email,
        password: password,
        returnSecureToken: true
    }).pipe(
      catchError(this.handleError),tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    );
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOQDJJYFYEE9GxnHkRi873vkfzNP7sQ5E',{
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    ));
  }

  autoLogin() {
      const userData: {
        email: string,
        id: string,
        _token: string,
        _tokenExpirationDate: string
      } = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return;
      }
      const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));

      if(loadedUser.getToken()) {
        this.user.next(loadedUser);
      }

  }
  logout() {
    this.user.next(null);
    this.route.navigate(['auth'])
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown Error Occurred!';
    if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
    }
    switch(errorRes.error.error.message) {
      case 'EMAIL_EXISTS': errorMessage = 'This Email Already exists';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
