import {Injectable, EventEmitter} from "@angular/core";
import {LoggingService} from "./logging.service";
@Injectable()
export class Account {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
 accountStatus = new EventEmitter<string>();
 constructor(private logging: LoggingService) {}
 addAccount(name: string, status: string) {
   this.accounts.push({name: name, status: status});
   this.logging.logStatusChange(status);
 }
 updateStatus(id: number, status: string) {
   this.accounts[id].status = status;
   this.logging.logStatusChange(status);
 }
}
