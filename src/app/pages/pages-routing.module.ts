import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocalGamePageComponent } from './local-game-page/local-game-page.component';
import { OnlineGamePageComponent } from './online-game-page/online-game-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [

  {
    path : "user",
    component : UserPageComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "login",
    component : LoginPageComponent
  },
  {
    path : "local-game",
    component : LocalGamePageComponent
  },
  {
    path : "online-game",
    component : OnlineGamePageComponent
  },

  {
    path : "**",
    redirectTo: 'home',
  },
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})

export class PagesRoutingModule { }

