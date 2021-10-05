import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfilComponent } from './profil/profil.component';
import { AddSportComponent } from './add-sport/add-sport.component';

const routes: Routes = [
  {path: 'adduser', component: AddUserComponent},
  {path: 'addsport', component: AddSportComponent},
  {path: 'login', component: LogInComponent},
  {path: 'profil', component: ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
