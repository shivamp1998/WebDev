import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import {FlashMessagesModule} from "angular2-flash-messages";
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from './guards/auth.guard';
import { UpdateComponent } from './components/update/update.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeformComponent } from './resume/resumeform/resumeform.component';
import { ResumedisplayComponent } from './resume/resumedisplay/resumedisplay.component';

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'update', component: UpdateComponent,canActivate:[AuthGuard]},
  {path: 'resume', component: ResumeComponent},
  {path: 'resumeform',component: ResumeformComponent},
  {path: 'resumedisplay', component: ResumedisplayComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    UpdateComponent,
    ResumeComponent,
    ResumeformComponent,
    ResumedisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
