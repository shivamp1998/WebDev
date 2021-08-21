import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BasicDirective} from './directive/basic.directive';
import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
