import { Component } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  playerOneUsername: string = "akaRicky";
  playerTwoUsername: string = "SolielLumiere";

  playerOneColor: string = ''
  playerTwoColor: string = ''

  playerOneScore: number = 11;
  playerTwoScore: number = 10;

  constructor() {
    if(this.playerOneScore > this.playerTwoScore) {
      this.playerOneColor = "#00CC00";
      this.playerTwoColor = "red";
    }
    else {
      this.playerOneColor = "red";
      this.playerTwoColor = "#00CC00";
    }
  }

  playerOneWon(): boolean {
    return this.playerOneScore > this.playerTwoScore;
  }

  getScore(): string {
    return this.playerOneScore.toString()
         + " - "
         + this.playerTwoScore.toString();
  }
}
