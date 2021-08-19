import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../services/auth.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateName: String = "";
  updateEmail: String = "";
  constructor(private validateservice: ValidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router ) { }
  onUpdate(){
    // console.log(this.authService.user.id);
    const user = {
      id: this.authService.user.id,
      name: this.updateName,
      email: this.updateEmail
    }
    if(!this.validateservice.validateEmail(user.email)){
      this.flashMessage.show("Please use a Valid Email Address", {cssClass: "alert-danger"});
      return false;
    }
    this.authService.updateUser(user).subscribe(data => {
      if((data as any).success){
        this.flashMessage.show("User Updated", {cssClass: 'alert-success'});
        this.router.navigate(['/profile']);
      }else{
        this.flashMessage.show("something went wrong",{cssClass:'alert-danger'});
        this.router.navigate(['/update']);
      }
    })
    return true;
  }
  ngOnInit(): void {
  }

}
