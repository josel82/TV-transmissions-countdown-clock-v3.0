import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  
  countingDown:boolean = false;
  targetTime: { hour:number, minute:number, second:number }

  constructor() { }

  ngOnInit() {
  }

  startCount(target){
    this.countingDown = true;
    this.targetTime = target;
  }

  pauseCount(){
    this.countingDown = false;
  }

}
