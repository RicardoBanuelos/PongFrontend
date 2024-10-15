import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LocalGameComponent } from './local-game/local-game.component';
import { OnlineGameComponent } from './online-game/online-game.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    LocalGameComponent,
    OnlineGameComponent,
    UserComponent
  ]
})
export class PagesModule { }
