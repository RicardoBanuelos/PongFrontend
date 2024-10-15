import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpageComponent } from './userpage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[UserpageComponent],
  declarations: [UserpageComponent]
})
export class UserpageModule { }
