import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent  {

  email: string = '';
  username: string = '';
  password: string = '';

  onSignUp() {
    console.log('Email:', this.email);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add authentication logic here
  }
}
