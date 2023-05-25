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

const drawResult = 3;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() id!: number;
  @Input() result!: number;
  @Input() displayPlayerMove = false;
  @Output() valorEnviado = new EventEmitter<boolean>();
  @Output() clearTimer = new EventEmitter<boolean>();
  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';
  player!: any;
  intervalRef: any;
  displayerResult = 'DRAW';

  constructor(
    private gameService: GameService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.setAstronautStyleSettings();
  }

  playerMove() {
    if (!this.player) {
      this.callPlayer(this.id);
    }
  }

  setAstronautStyleSettings() {
    const circle =
      this.elementRef.nativeElement.firstChild.childNodes[1].childNodes[1];
    const gradient = this.elementRef.nativeElement.firstChild.childNodes[0];
    const card = this.elementRef.nativeElement.firstChild;
    console.log(card);
    if (this.id === 1) {
      circle.style.border = '2px solid #56B4E9';
      circle.style.backgroundImage = "url('../../../assets/astronaut1.svg')";
      gradient.style.background =
        'radial-gradient(69.35% 75.55% at 96.74% 100%, #56B4E9 0%, rgba(86, 180, 233, 0) 100%)';
    }
    if (this.id === 2) {
      circle.style.border = '2px solid #8629FF';
      circle.style.backgroundImage = "url('../../../assets/astronaut2.svg')";
      gradient.style.background =
        'radial-gradient(69.35% 75.55% at 96.74% 100%, #C08FFF 0%, rgba(86, 180, 233, 0) 100%)';
      card.style.boxShadow = '0px 0px 28px 2px rgba(134, 41, 255, 1)';
    }
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

    if (this.displayPlayerMove) {
      this.setPlayerMove();
    }
  }

  defaultBackground() {
    switch (this.id) {
    }
  }

  emitReady(value: boolean) {
    this.valorEnviado.emit(value);
  }
  setPlayerMove() {
    const element = this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes[1];
    const ROOT_URL = '../../../assets/';
    const img = document.createElement('img');
    img.setAttribute('width', '30%');
    element.style.backgroundImage = 'none';
    switch (this.player.gameValue) {
      case 'SCISSORS':
        img.setAttribute('src', `${ROOT_URL}scissor.svg`);
        break;
      case 'PAPER':
        img.setAttribute('src', `${ROOT_URL}paper.svg`);
        break;
      case 'LIZARD':
        img.setAttribute('src', `${ROOT_URL}lizard.svg`);
        break;
      case 'SPOCK':
        img.setAttribute('src', `${ROOT_URL}spock.svg`);
        break;
      case 'ROCK':
        img.setAttribute('src', `${ROOT_URL}rock.svg`);
        break;
    }
    element.appendChild(img);
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
        if (player.gameValue) {
          this.player = player;
        }
      },
      complete: () => {
        if (this.player) {
          this.emitReady(true);
        }
      },
    });
  }
}
