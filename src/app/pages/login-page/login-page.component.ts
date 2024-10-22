import { Component } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  constructor(private axiosService: AxiosService) {}

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
        (response) => console.log(response.data)
      );
  }
}
