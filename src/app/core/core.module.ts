import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HomeComponent } from '../pages/home/home.component';
import { LocalGameComponent } from '../pages/local-game/local-game.component';
import { OnlineGameComponent } from '../pages/online-game/online-game.component';
import { UserComponent } from '../pages/user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoreComponent,
    HomeComponent,
    LocalGameComponent,
    OnlineGameComponent,
    UserComponent
  ]
})
export class CoreModule { }
