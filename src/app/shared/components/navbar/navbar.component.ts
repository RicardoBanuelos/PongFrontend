import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private router: Router){}

  loggedIn: boolean = false
  userIconClick() {
    if(this.loggedIn) {
      this.router.navigateByUrl('/user')
    }
    else {
      this.router.navigateByUrl('/login')
    }
  }
}
