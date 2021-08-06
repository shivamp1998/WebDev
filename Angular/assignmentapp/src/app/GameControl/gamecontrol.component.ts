import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})

export class GameControl {
  interval;
  @Output() startGameEvent = new EventEmitter<number>();
  startNumber:number = 0;
  startGame(){
    this.interval = setInterval(()=> {
      this.startGameEvent.emit(this.startNumber);
      this.startNumber++;
    },1000);


  }
  stopGame(){
    clearInterval(this.interval);
  }
}
