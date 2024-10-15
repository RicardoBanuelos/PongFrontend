import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { LocalgamepageComponent } from './localgamepage/localgamepage.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    LocalgamepageComponent,
    GamepageComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
