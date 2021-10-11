import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { ProfilComponent } from './profil/profil.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { ViewSportComponent } from './view-sport/view-sport.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ProfilComponent,
    LogInComponent,
    AddSportComponent,
    ViewSportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
