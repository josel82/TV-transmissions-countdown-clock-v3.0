import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';

import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  providers: [ClockService]
})
export class OutputComponent implements OnInit, OnDestroy {
  @Input() set setTargetTime(targetTime: {hour:number, minute:number, second:number}){
    this.targetTime = targetTime;
  }
  @Output() onPause = new EventEmitter<void>();

  progress:number = 100;
  targetTime: {hour:number, minute:number, second:number} = {hour:0, minute:0, second:0};

  

  

  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.clockService.counter.subscribe( timeDiff => console.log(timeDiff));
    this.clockService.start(this.targetTime);
  }
  ngOnDestroy (){
    this.clockService.stop();
  }

  pauseCount(){
    this.onPause.emit();
  }

}
