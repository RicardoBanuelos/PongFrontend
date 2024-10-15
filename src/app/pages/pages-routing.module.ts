import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocalGameComponent } from './local-game/local-game.component';
import { OnlineGameComponent } from './online-game/online-game.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path : "user",
    component : UserComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "local-game",
    component : LocalGameComponent
  },
  {
    path : "online-game",
    component : OnlineGameComponent
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

