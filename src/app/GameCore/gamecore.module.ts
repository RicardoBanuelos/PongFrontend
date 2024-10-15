import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamepageComponent } from './Pages/gamepage/gamepage.component';
import { LocalgameComponent } from '../localgame/localgame.component';
import { MainpageComponent } from './Pages/mainpage/mainpage.component';
import { UserpageComponent } from './Pages/userpage/userpage.component';
import { GameCoreRoutesModule } from './gamecore-routing.module';


@NgModule({
  imports: [
    CommonModule,
    GameCoreRoutesModule
  ],
  exports: [],
  declarations: [
    GamepageComponent,
    LocalgameComponent,
    MainpageComponent,
    UserpageComponent
  ]
})
export class GamecoreModule { }
