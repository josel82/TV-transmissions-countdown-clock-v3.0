import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  
  countingDown:boolean = false;
  targetTime: { hours:number, minutes:number, seconds:number }

  /**
   * startCount event handler. Listens to the input component
   * @param target target time
   */
  startCount(target:{ hours:number, minutes:number, seconds:number }){
    this.countingDown = true;
    this.targetTime = target;
  }

  /**
   * Pause event handler. Listens to the Output component.
   */
  pauseCount(){
    this.countingDown = false;
  }

}
