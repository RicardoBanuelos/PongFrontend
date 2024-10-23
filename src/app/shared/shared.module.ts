import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { InputComponent } from './components/input/input.component';
import { ErrorMessageComponent } from './components/ErrorMessage/ErrorMessage.component';

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
    ErrorMessageComponent
  ],
  declarations: [
    NavbarComponent,
    ButtonComponent,
    HomeTitleComponent,
    InputComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
