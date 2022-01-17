import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);
  }
  onSubmit(form: NgForm) {
    let authObs: Observable<AuthResponseData>
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if(this.isLoginMode) {
      authObs = this.authService.login(email,password)
    }else{
      authObs = this.authService.signup(email,password)
    }

    authObs.subscribe( authRes => {
      console.log(authRes);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorMessage => {
      this.isLoading = false;
      this.error = errorMessage;
    })

  }
  onHandleError() {
    this.error = null;
  }
}
