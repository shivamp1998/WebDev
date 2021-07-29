import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverActiveStatus = false;
  testStyle = "color:blue";
  serverCreationStatus = "No Server Was Created!";
  inputText = "This shit value";
  serverName = "server 1";
  userName = '';
  serverCreated = false;
  constructor() {
    setTimeout(()=> {
      this.serverActiveStatus = true;
    });

  }
  onClickEvent () {
    this.serverCreationStatus = "A Server Is created! with the name" + this.serverName ;
    this.serverCreated =  true;
  }
  onInput(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  reset() {
    this.userName = '';
  }
  ngOnInit(): void {
  }

}
