import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { ViewSportComponent } from './components/view-sport/view-sport.component';
import { UserIdPipe } from './services/pipes/user-id.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ProfilComponent,
    LogInComponent,
    AddSportComponent,
    ViewSportComponent,
    UserIdPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [UserIdPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
