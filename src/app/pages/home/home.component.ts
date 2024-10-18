import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private router: Router) {}

  goToLocalGame() {
    this.router.navigateByUrl("/local-game")
  }

  goToOnlineGame() {
    this.router.navigateByUrl("/online-game")
  }
}
