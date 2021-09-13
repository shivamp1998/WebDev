import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onLoadServer(id: any) {
    this.route.navigate(['/server',id,'edit'], {queryParams: {allowEdit: false}, fragment: 'false'});
  }
  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
