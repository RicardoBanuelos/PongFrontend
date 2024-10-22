import { Component, EventEmitter, Output } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';
import axios from 'axios';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent  {

  constructor(private axiosService : AxiosService) {}

  email: string = '';
  username: string = '';
  password: string = '';

  onSignUp() {
    this.axiosService.request(
      "POST",
      "/register",
      {
        "email": this.email,
        "username" : this.username,
        "password" : this.password
      }).then(
        (response) => console.log(response.data)
      );
  }
}
