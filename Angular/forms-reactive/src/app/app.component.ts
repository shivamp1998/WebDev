import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
