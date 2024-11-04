import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from '../../core/services/jwt.service';
import { Match } from '../../shared/models/Match';
import { AxiosService } from '../../core/services/axios.service';

@Component({
  selector: 'app-local-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent {
  username: string = '';
  matches: Match[] = [];
  wins: number = 0;
  loses: number = 0;
  page: number = 0;

  constructor(private axiosService: AxiosService,
              private authService: AuthService,
              private jwt: JwtService,
              private router: Router
  ) {
    if(!this.authService.isLoggedIn() || this.jwt.expired()) {
      this.authService.logout()
      this.router.navigateByUrl("/login")
    }

    const decodedUsername = this.jwt.getUsername()
    if(decodedUsername) {
      this.username = decodedUsername
    }
    else {
      this.authService.logout()
      this.router.navigateByUrl("/login")
    }

    this.axiosService.request(
      "GET",
      `/matches?username=${this.username}&page=${this.page}&size=9`,
      {},
    ).then((response) => {
      console.log(response.data)
      this.matches = response.data
      this.matches.forEach(match => {
        const playerOneWon = match.playerOneScore > match.playerTwoScore;
        if(playerOneWon)
        {
          this.wins += match.playerOneUsername === this.username ? 1 : 0;
          this.loses += match.playerTwoUsername === this.username ? 1 : 0;
        }
        else
        {
          this.wins += match.playerTwoUsername === this.username ? 1 : 0;
          this.loses += match.playerOneUsername === this.username ? 1 : 0;
        }
      });
    })
  }

  getRecord(): string {
    return "W: " + this.wins + " | L: " + this.loses;
  }
}
