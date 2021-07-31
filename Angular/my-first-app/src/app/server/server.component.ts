import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
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
}
