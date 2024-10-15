import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from '../home/home.component';
import { LocalGameComponent } from '../local-game/local-game.component';
import { OnlineGameComponent } from '../online-game/online-game.component';

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
    path : "local",
    component : LocalGameComponent
  },
  {
    path : "online",
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

export class CoreRoutingModule { }

