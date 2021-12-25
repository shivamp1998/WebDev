import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: ElementRef) {
  //   console.log(form.value)
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
}
