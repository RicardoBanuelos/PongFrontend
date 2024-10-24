import { jwtDecode } from 'jwt-decode';
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from '../../core/services/jwt.service';

@Component({
  selector: 'app-local-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent {
  username: string = ''

  constructor(private authService: AuthService,
              private jwt: JwtService,
              private router: Router
  ) {
    if(!this.authService.isLoggedIn()) {
      this.authService.logout()
      this.router.navigateByUrl("/login")
    }

    const decodedUsername = jwt.getUsername()
    if(decodedUsername) {
      this.username = decodedUsername
    }
    else {
      this.authService.logout()
      this.router.navigateByUrl("/login")
    }
  }
}
