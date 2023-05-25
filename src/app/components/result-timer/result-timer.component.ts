import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-timer',
  templateUrl: './result-timer.component.html',
  styleUrls: ['./result-timer.component.scss']
})
export class ResultTimerComponent implements OnInit {

  constructor() { }

  @Output() clearTimer = new EventEmitter<boolean>();
  timer : number = 3

  ngOnInit(): void {
    this.startCounting()
  }

  emitReady(value: boolean) {
    this.clearTimer.emit(value);
  }

  startCounting(){
   const interval = setInterval(() => {
    if(this.timer === 0){
      clearInterval(interval)
      this.emitReady(false)
    }else{
      this.timer = this.timer -1
      console.log(this.timer)
    }
   }, 1000);
  }

}
