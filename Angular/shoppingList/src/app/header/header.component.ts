import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private dataStorage: DataStorageService, private authService: AuthService){}
  userSub: Subscription;
  isAuthenticated = false;
  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    });

  }
  onSaveData() {
      this.dataStorage.storeRecipes();
   }
  onFetchData() {
     this.dataStorage.fetchRecipes().subscribe();
   }
   ngOnDestroy() {
     this.userSub.unsubscribe();
   }
}
