import { Component } from '@angular/core';
import { JwtService } from './core/services/jwt.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private jwtService : JwtService,
              private authService : AuthService
  ) {
    if(this.jwtService.expired())
      this.authService.logout();
  }
}
