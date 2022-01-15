import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);
  }
  onSubmit(form: NgForm) {

    if(!form.valid) {
      return;
    }
    this.isLoading = true;
    if(this.isLoginMode) {
      //
    }else{
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signup(email,password).subscribe(resData => {
        console.log(resData);

      }, error => {
         this.error = error;
         console.log(this.error);
      })
    }


  }
}
