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
  constructor() {
    setTimeout(()=> {
      this.serverActiveStatus = true;
    });
  }
  onClickEvent () {
    this.serverCreationStatus = "A Server Is created!";
  }
  onInput(event: Event) {
    console.log(event);
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
