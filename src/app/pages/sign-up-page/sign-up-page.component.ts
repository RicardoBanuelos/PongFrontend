import { Component } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent  {

  signUpForm: FormGroup;
  constructor(private axiosService : AxiosService,
              private authService : AuthService,
              private formBuilder : FormBuilder,
              private router : Router)
  {
    if(this.authService.isLoggedIn()) {
      this.authService.logout()
      this.router.navigateByUrl("/user")
    }

    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, this.passwordStrengthValidator]]
    });
  }

  signUpError: boolean = false;
  signUpErrorMessage: string = ''

  onSignUp() {
    this.signUpForm.markAllAsTouched()
    if(this.signUpForm.invalid) {
      return;
    }

    this.axiosService.request(
      "POST",
      "/register",
      {
        "email": this.signUpForm.get('email')?.value,
        "firstname": this.signUpForm.get('firstname')?.value,
        "lastname": this.signUpForm.get('lastname')?.value,
        "username" : this.signUpForm.get('username')?.value,
        "password" : this.signUpForm.get('password')?.value
      }).then(
        (response) => {
          this.authService.setToken(response.data.token)
          this.router.navigateByUrl('/user')
        }
      ).catch(
        error => {
          if(error.status == 409)
          {
            this.signUpError= true;
            this.signUpErrorMessage = error.response.data.message
          }

          this.authService.logout()
        }
      );
  }

  passwordStrengthValidator(control: any) {
    const value: string = control.value || '';
    if (!value) {
      return null;
    }

    // Regular expressions to check password conditions
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && isValidLength;

    // If password does not match requirements, return an error object
    if (!passwordValid) {
      return {
        passwordStrength: {
          hasUpperCase,
          hasLowerCase,
          hasNumeric,
          hasSpecialChar,
          isValidLength
        }
      };
    }
    return null;
  }
}
