import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalGameComponent } from './local-game/local-game.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LocalGameComponent],
  declarations: [LocalGameComponent]
})

export class CoreModule {}
