import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String = "";
  username: String = "";
  email: String = "";
  password: String = "";
  constructor(private validateservice: ValidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }
  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    if(!this.validateservice.validateRegister(user)){
      this.flashMessage.show("Please Fill all the fields", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if(!this.validateservice.validateEmail(user.email)){
      this.flashMessage.show("Please Use a Valid Email Address", {cssClass:"alert-danger", timeout: 3000});
      return false;
    }
    //register users
    this.authService.registerUser(user).subscribe(data => {
       if((data as any).success){
         this.flashMessage.show('You are now Registered and can log in',{cssClass: 'alert-success'});
         this.router.navigate(['/login'])
       }else {
         this.flashMessage.show("Something Went Wrong", {cssClass: 'alert-danger'});
         this.router.navigate(['/register']);
       }
    })

    return true;


  }


}
