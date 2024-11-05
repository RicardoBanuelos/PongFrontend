import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from '../../core/services/jwt.service';
import { Match } from '../../models/Match';
import { AxiosService } from '../../core/services/axios.service';

@Component({
  selector: 'app-local-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent {
  username: string = '';
  matches: Match[] = [];
  totalPages: number = 0;
  wins: number = 0;
  losses: number = 0;
  page: number = 0;

  constructor(private axiosService: AxiosService,
              private authService: AuthService,
              private jwt: JwtService,
              private router: Router
  ) {
    this.validateToken();
    this.decodeUsername();
    this.getMatches();
    this.calculateRecord();
  }

  validateToken() {
    if(!this.authService.isLoggedIn() || this.jwt.expired()) {
      this.authService.logout();
      this.router.navigateByUrl("/login");
    }
  }

  decodeUsername() {
    const decodedUsername = this.jwt.getUsername()
    if(decodedUsername) {
      this.username = decodedUsername;
    }
    else {
      this.authService.logout();
      this.router.navigateByUrl("/login");
    }
  }

  async getMatches() {
    await this.axiosService.request(
      "GET",
      `/matches?username=${this.username}&page=${this.page}&size=8`,
      {},
    ).then((response) => {
      this.matches = response.data.content;
      this.totalPages = response.data.totalPages;
    })
  }

  async calculateRecord() {
    await this.axiosService.request(
      "GET",
      `/matches/record?username=${this.username}`,
      {},
    ).then((response) => {
      this.wins = response.data[0];
      this.losses = response.data[1];
    })
  }

  getRecord(): string {
    return "W: " + this.wins + " | L: " + this.losses;
  }

  morePages(): boolean {
    return (this.page + 1) < this.totalPages;
  }

  atLastPage(): boolean {
    return this.page > 0 && (this.page + 1) === this.totalPages;
  }

  nextPage() {
    this.page += 1;
    if(this.page >= this.totalPages)
      this.page = this.totalPages - 1;

    this.getMatches()
  }

  previousPage() {
    this.page -= 1;
    if(this.page < 0)
      this.page = 0;

    this.getMatches()
  }
}
