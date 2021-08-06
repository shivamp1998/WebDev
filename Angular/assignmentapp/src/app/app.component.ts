import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumber = [];
  oddNumber = [];
  gameStarted(event: number) {
    if(event%2 ==0) {
      this.evenNumber.push(event);
    }else {
      this.oddNumber.push(event);
    }
  }
}
