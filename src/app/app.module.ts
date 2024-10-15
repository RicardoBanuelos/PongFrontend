import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { LocalgamepageModule } from './localgamepage/localgamepage.module';
import { LocalgameComponent } from './localgame/localgame.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LocalgamepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
