import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './Pages/userpage/userpage.component';
import { MainpageComponent } from './Pages/mainpage/mainpage.component';
import { LocalgamepageComponent } from './Pages/localgampeage/localgamepage.component';
import { GamepageComponent } from './Pages/gamepage/gamepage.component';

const routes: Routes = [

  {
    path : "user",
    component : UserpageComponent
  },
  {
    path : "home",
    component : MainpageComponent
  },
  {
    path : "local",
    component : LocalgamepageComponent
  },
  {
    path : "online",
    component : GamepageComponent
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

export class GameCoreRoutesModule { }

