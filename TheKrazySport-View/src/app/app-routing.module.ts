import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './components/add-user/add-user.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { ViewSportComponent } from './components/view-sport/view-sport.component';


const routes: Routes = [
  {path: '', component: ViewSportComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'addsport', component: AddSportComponent},
  {path: 'login', component: LogInComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'home', component: ViewSportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
