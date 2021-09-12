import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onLoadServer(id: any) {
    this.route.navigate(['/server',id,'edit'], {queryParams: {allowEdit: false}, fragment: 'false'});
  }

}
