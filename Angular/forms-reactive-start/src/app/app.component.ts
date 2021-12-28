import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Shivam', 'Sachin', 'Priyam', 'Sourav'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe((value)=> {
    //   console.log(value);
    // })
    this.signupForm.statusChanges.subscribe((status)=> {
      console.log(status);
    });
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'shivam',
    //     email: 'shivampandey98@gmail.com'
    //   },
    //   gender: 'female',
    //   hobbies: ['cricket']
    // })
    this.signupForm.patchValue({
      userData: {
        username: 'shivam',
        email: 'shivam@98.com'
      }
    })
  }
  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }
  onSubmit() {
    console.log(this.signupForm.value);
  }
  forbiddenNames(control): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)!=-1){
      return {'UsernameForbidden': true};
    }
     return null;
  }

}
