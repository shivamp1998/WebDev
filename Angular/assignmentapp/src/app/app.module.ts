import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Even }  from './Even/even.component';
import { Odd } from './Odd/odd.component';
import {GameControl} from './GameControl/gamecontrol.component';
@NgModule({
  declarations: [
    AppComponent,
    Even,
    Odd,
    GameControl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
