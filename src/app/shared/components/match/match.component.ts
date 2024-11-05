import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../../models/Match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match!: Match;

  playerOneColor: string = ''
  playerTwoColor: string = ''

  ngOnInit(): void {
    if(this.match.playerOneScore > this.match.playerTwoScore) {
      this.playerOneColor = "#00CC00";
      this.playerTwoColor = "red";
    }
    else {
      this.playerOneColor = "red";
      this.playerTwoColor = "#00CC00";
    }
  }

  playerOneWon(): boolean {
    return this.match.playerOneScore > this.match.playerTwoScore;
  }

  getScore(): string {
    return this.match.playerOneScore.toString()
         + " - "
         + this.match.playerTwoScore.toString();
  }
}
