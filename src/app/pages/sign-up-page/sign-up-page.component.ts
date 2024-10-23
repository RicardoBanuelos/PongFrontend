import { Component } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent  {

  signUpForm: FormGroup;
  constructor(private axiosService : AxiosService,
              private formBuilder : FormBuilder)
  {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, this.passwordStrengthValidator]]
    });
  }

  invalidEmail: boolean = false;

  onSignUp() {
    this.signUpForm.markAllAsTouched()
    console.log(this.signUpForm.value)

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
          console.log(response.data)
          this.axiosService.setAuthToken(response.data.token)
        }
      ).catch(
        error => {
          console.log(error.response.data.message)
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
