import { Component } from '@angular/core';
import {LoggingService} from "../logging.service";
import {Account} from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent {
  constructor(private logging: LoggingService, private account: Account){
    this.account.accountStatus.subscribe((status)=>{
      alert("account Status " + status);
    })
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.account.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

  }
}
