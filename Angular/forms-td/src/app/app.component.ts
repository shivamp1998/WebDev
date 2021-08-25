import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') element;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit() {
    console.log(this.element)
  }
}
