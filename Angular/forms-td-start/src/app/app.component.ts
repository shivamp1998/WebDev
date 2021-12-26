import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  answer = "";
  genders = ['male','female'];
  name = "";
  email = "";
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answerQ: '',
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: ElementRef) {
  //   console.log(form.value)
  // }
  onSubmit() {
    console.log(this.signupForm.value);
    this.name = this.signupForm.value.userData.username;
    this.email = this.signupForm.value.userData.email;
  }
}
