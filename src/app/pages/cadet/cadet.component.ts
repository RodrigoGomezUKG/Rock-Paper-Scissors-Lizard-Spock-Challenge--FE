import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cadet',
  templateUrl: './cadet.component.html',
  styleUrls: ['./cadet.component.scss'],
})
export class CadetComponent implements OnInit {
  constructor(private router: Router, private gameService: GameService) { }

  players: boolean[] = [];
  btnReady: boolean = false
  result!: number
  winner: number = 1
  displayedMatch = false
  valueResult!: any
  displayMoves = false
  displayTimer = false


  ngOnInit(): void { }

  displayResult() {
    if (this.btnReady) {
      this.displayTimer = true
      console.log(this.displayTimer)
    }
  }

  // displayResult logic is in clearTimer, change function naming

  clearTimer(value: boolean) {
    this.displayTimer = value
    this.result = this.valueResult
    this.displayMoves = true
    this.displayedMatch = true
  }

  backToStart() {
    this.gameService.deletePlayers().subscribe()
    this.router.navigate(['/starting'])
  }

  manejarValor(valor: boolean) {
    this.players.push(valor);
    console.log(this.players)
    if (this.players.length === 2) {
      this.gameService.getMatchResult().subscribe({
        next: (value) => {
          this.valueResult = value
          console.log(this.valueResult)
        }
      })
      this.btnReady = true
    }
  }
}
