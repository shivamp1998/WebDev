import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService } from "./user.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isClick: boolean = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedClick.subscribe( clickBool=> {
      this.isClick = clickBool;
    })
  }
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
