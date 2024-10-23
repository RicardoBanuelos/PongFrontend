import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LocalGamePageComponent } from './local-game-page/local-game-page.component';
import { OnlineGamePageComponent } from './online-game-page/online-game-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
],
  declarations: [
    HomeComponent,
    LocalGamePageComponent,
    OnlineGamePageComponent,
    UserPageComponent,
    LoginPageComponent,
    SignUpPageComponent
  ]
})
export class PagesModule { }
