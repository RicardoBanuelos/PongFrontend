import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.css']
})
export class HomeTitleComponent{
  @Input() size: string = "10rem"

  getSize() {
    return this.size;
  }
}
