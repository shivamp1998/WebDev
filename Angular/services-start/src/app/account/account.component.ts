import { Component, Input } from '@angular/core';
import {LoggingService} from '../logging.service';
import {Account} from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private logging: LoggingService, private acc: Account) {}

  onSetTo(status: string) {
    this.acc.updateStatus(this.id,status)
    this.acc.accountStatus.emit(status);
  }
}
