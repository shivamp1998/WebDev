import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    .hidden {
      display: hidden;
    }
    `
  ]
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  clicked = false;
  number  = 1;
  buttonClicks : Number[] = [];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }
  serverstatus() {
    return "offline";
  }
  getColor() {
    if (this.serverStatus == 'offline') {
      return 'red';
    }else {
      return "green";
    }
  }
  onClick () {
    this.number++;
    this.buttonClicks.push(this.number);
    this.clicked = this.clicked === false ? true : false;
  }
}
