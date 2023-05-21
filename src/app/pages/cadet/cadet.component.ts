import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadet',
  templateUrl: './cadet.component.html',
  styleUrls: ['./cadet.component.scss'],
})
export class CadetComponent implements OnInit {
  constructor() {}
  
  players: boolean[] = [];
  btnReady : boolean = false
  result! : number
  winner : number = 1
  

  ngOnInit(): void {}

  displayResult(){
    if(this.btnReady){
      this.result = 1
      console.log('entra al boton')
    }
  }

  manejarValor(valor: boolean) {
    this.players.push(valor);
    console.log(this.players)
    if(this.players.length === 2){
      this.btnReady = true
    }
  }
}
