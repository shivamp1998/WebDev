import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUser: NgForm;
  genders = ['male','female'];
  defaultQuestion: string = "pet";
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUser.setValue({
      username: suggestedName,
      email: ''
    })
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
