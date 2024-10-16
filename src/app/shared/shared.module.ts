import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class SharedModule { }
