import {
  Component,
  Input,
  Output,
  OnInit,
  HostBinding,
  ElementRef,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { GameService } from 'src/app/services/game.service';
// import { handsPath } from './playerHands'

interface Player {
  playerNumber: number;
  gameValue: string;
}

const handsPath = {
  SCISSORS: "url('../../../assets/scissor.svg')",
  LIZZARD: "url('../../../assets/lizard.svg')",
};

const drawResult = 3

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() id!: number;
  @Input() result!: number;
  @Output() valorEnviado = new EventEmitter<boolean>();
  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';
  player!: any;
  intervalRef: any;
  displayerResult = 'DRAW';


  constructor(
    private gameService: GameService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    // this.callPlayer(this.id)

    this.intervalRef = setInterval(() => {
      if (!this.player) {
        this.callPlayer(this.id);
      }
      if (this.player) {
        this.emitReady(true);
        clearInterval(this.intervalRef);
      }
    }, 5000);
  }

  ngOnChanges() {
    console.log(this.result);

    if (this.result) {
      if (this.result === this.id) {
        console.log('winner entry');
        this.displayerResult = 'Winner';
      } else {
        this.displayerResult =
          this.result === drawResult
            ? (this.displayerResult = 'Draw')
            : (this.displayerResult = 'Defeat');
        console.log('defeat entry');
      }
    }
  }

  defaultBackground() {
    switch (this.id) {
    }
  }

  emitReady(value: boolean) {
    this.valorEnviado.emit(value);
  }

  changeBakcground() {
    const element = this.elementRef.nativeElement;
    const ROOT_URL = '../../../assets/';
    console.log(element);

    switch (this.player.gameValue) {
      case 'SCISSORS':
        element.firstChild.childNodes[0].childNodes[1].style.backgroundImage = `url(${ROOT_URL}scissor.svg)`;
        break;
      case 'PAPER':
        element.firstChild.childNodes[0].childNodes[1].style.backgroundImage = `url(${ROOT_URL}paper.svg)`;
        break;
      case 'LIZARD':
        element.firstChild.childNodes[0].childNodes[1].style.backgroundImage = `url(${ROOT_URL}lizard.svg)`;
        break;
      case 'SPOCK':
        element.firstChild.childNodes[0].childNodes[1].style.backgroundImage = `url(${ROOT_URL}spock.svg)`;
        break;
      case 'ROCK':
        element.firstChild.childNodes[0].childNodes[1].style.backgroundImage = `url(${ROOT_URL}rock.svg)`;
        break;
    }
  }

  setBackground() {
    const element = this.elementRef.nativeElement;
    element.firstChild.childNodes[0].childNodes[1].style.backgroundColor =
      'red';
    console.log(element);
  }

  callPlayer(id: number) {
    return this.gameService.callPlayer(id).subscribe({
      next: (player) => {
        if (player) {
          this.player = player;
        }
      },
    });
  }
}
