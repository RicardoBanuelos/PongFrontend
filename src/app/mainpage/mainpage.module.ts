import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [MainpageComponent],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
