import { Match } from './models/Match';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { InputComponent } from './components/input/input.component';
import { ErrorMessageComponent } from './components/ErrorMessage/ErrorMessage.component';
import { MatchComponent } from './components/match/match.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    HomeTitleComponent,
    InputComponent,
    ErrorMessageComponent,
    MatchComponent,
  ],
  declarations: [
    NavbarComponent,
    ButtonComponent,
    HomeTitleComponent,
    InputComponent,
    ErrorMessageComponent,
    MatchComponent
  ]
})
export class SharedModule { }
