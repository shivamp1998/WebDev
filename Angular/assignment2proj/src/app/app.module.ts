import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BasicDirective} from './directive/basic.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
