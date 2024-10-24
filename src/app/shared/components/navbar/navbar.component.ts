import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private router: Router,
              private authService: AuthService
  ){}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  homeIconClick() {
    this.router.navigateByUrl("/home");
  }

  userIconClick() {
    if(this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/user');
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }

  logoutClick() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
