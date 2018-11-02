import { Component } from '@angular/core';

import { slideInOutAnimation } from '../animations';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
  animations: [ slideInOutAnimation ]
    
})
export class ControllerComponent {
  
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
