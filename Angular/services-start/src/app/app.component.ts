import { Component, OnInit } from '@angular/core';
import { Account } from './account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Account]
})
export class AppComponent implements OnInit{
  constructor(private acc: Account) {}
  accounts: {name: string, status: string}[] = [];
  ngOnInit() {
    this.accounts = this.acc.accounts;
  }
}
