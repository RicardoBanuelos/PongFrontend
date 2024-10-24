import { Component } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  constructor(private axiosService: AxiosService,
              private authService: AuthService,
              private router : Router) {}

  username: string = '';
  password: string = '';

  onLogin() {
    this.axiosService.request(
      "POST",
      "/login",
      {
        "username" : this.username,
        "password" : this.password
      }).then(
        (response) => {
          this.authService.setToken(response.data.token)
          this.router.navigateByUrl('/user')
        }
      ).catch(error => {
        console.log(error)
        this.authService.logout()
      });
  }
}
