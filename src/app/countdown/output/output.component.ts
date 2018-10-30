import { 
  Component, 
  EventEmitter, 
  Output, 
  Input, 
  OnInit, 
  OnDestroy 
} from '@angular/core';
import * as moment from 'moment';


import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  providers: [ClockService]
})
export class OutputComponent implements OnInit, OnDestroy {

  @Input() set setTargetTime(targetTime: {hours:number, minutes:number, seconds:number}){
    this.targetTime = targetTime;
  }
  @Output() onPause = new EventEmitter<void>();

  progress:number = 0; // used by the spinner component 
  targetTime: {hours:number, minutes:number, seconds:number} = {hours:0, minutes:0, seconds:0};
  timeLeft: {hours:number, minutes:number, seconds:number} = {hours:0, minutes:0, seconds:0}; 
  counting:boolean;

  //ClockService injection
  constructor(private clockService: ClockService) { }

  /**
   * OnInit LifeCycle Hook. Runs once when the component has been created.
   */
  ngOnInit() {
    //Listen to the countdown and updates timeDiff property
    this.clockService.counter.subscribe( timeDiff => {
      this.timeLeft = timeDiff;
     
      // this.progress = this.setSpinnerProgress(timeDiff);
      if(!this.counting){
        this.setSpinnerProgress(timeDiff);
        this.counting = true;
      }
      
    });
    //Starts the process of countingdown
    this.clockService.start(this.targetTime);
  }

  /**
   * OnDestroy LifeCycle Hook. Runs upon component destruction.
   */
  ngOnDestroy (){
    //It stops the countdown 
    this.clockService.stop();
  }

  /**
   * Pause event handler. It triggers the proccess of 
   * stopping the countdown and navigate back to the input component.
   */
  pauseCount(){
    this.onPause.emit();
  }

  /**
   * It controls the spinner progress
   * @param timeDiff time duration between target and current time HH mm ss format 
   */
  setSpinnerProgress(timeDiff){
    const value = moment.duration(timeDiff).asMilliseconds(); //transforms time in milliseconds
    const increment = 10000/value; // amount by which progress should increment so the spinner reaches 100%
                                   // by the time duration specified, with a interval rate of 100ms 
    const interval = setInterval(()=>{
      this.progress = this.progress + increment;
      if(this.progress>=100) clearInterval(interval); 
    },100);
  }

}
