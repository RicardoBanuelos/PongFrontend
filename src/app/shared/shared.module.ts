import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    HomeTitleComponent,
    InputComponent
  ],
  declarations: [
    NavbarComponent,
    ButtonComponent,
    HomeTitleComponent,
    InputComponent
  ]
})
export class SharedModule { }
