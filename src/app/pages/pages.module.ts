import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LocalGamePageComponent } from './local-game-page/local-game-page.component';
import { OnlineGamePageComponent } from './online-game-page/online-game-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ],
  declarations: [
    HomeComponent,
    LocalGamePageComponent,
    OnlineGamePageComponent,
    UserPageComponent
  ]
})
export class PagesModule { }
