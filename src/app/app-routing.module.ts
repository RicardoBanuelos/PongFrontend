import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { LocalgamepageComponent } from './localgamepage/localgamepage.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainpageComponent},
  {path: 'local', component: LocalgamepageComponent},
  {path: 'online', component: GamepageComponent},
  {path: 'user', component: UserpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
