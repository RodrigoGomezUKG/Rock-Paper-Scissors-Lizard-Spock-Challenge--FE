import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cadet',
  templateUrl: './cadet.component.html',
  styleUrls: ['./cadet.component.scss'],
})
export class CadetComponent implements OnInit {
  constructor(private router: Router, private gameService: GameService) {}
  
  players: boolean[] = [];
  btnReady : boolean = false
  result! : number
  winner : number = 1
  displayedMatch = false
  valueResult!: any 
  

  ngOnInit(): void {}

  displayResult(){
    if(this.btnReady){
      this.result = this.valueResult
      this.displayedMatch = true
      console.log('entra al boton')
    }
  }

  backToStart(){
    this.gameService.deletePlayers().subscribe()
    this.router.navigate(['/starting'])
  }

  manejarValor(valor: boolean) {
    this.players.push(valor);
    console.log(this.players)
    if(this.players.length === 2){
      this.gameService.getMatchResult().subscribe({
        next: (value)=> {
          this.valueResult = value
          console.log(this.valueResult)
        }
      })
      this.btnReady = true
    }
  }
}
