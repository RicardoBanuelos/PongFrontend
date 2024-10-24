import { Component } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  loginForm: FormGroup;
  constructor(private axiosService: AxiosService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router : Router)
  {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  loginError: boolean = false;
  loginErrorMessage: string = ''

  onLogin() {
    if(this.loginForm.invalid) {
      this.loginError = true;
      this.loginErrorMessage = "Missing credentials"
    }

    this.axiosService.request(
      "POST",
      "/login",
      {
        "username" : this.loginForm.get('username')?.value,
        "password" : this.loginForm.get('password')?.value
      }).then(
        (response) => {
          this.authService.setToken(response.data.token)
          this.router.navigateByUrl('/user')
        }
      ).catch(error => {
        console.log(error)
        this.authService.logout()
        this.loginError = true;
        this.loginErrorMessage = "Wrong username or password"
      });
  }
}
