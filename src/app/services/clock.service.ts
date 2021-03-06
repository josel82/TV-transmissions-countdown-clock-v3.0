import * as moment from 'moment';
import { Subject } from 'rxjs';


export class ClockService {


  private interval;
  public counter = new Subject<{ hours: number, minutes: number, seconds: number }>();

  /**
   * It calculates the difference between target time and current time, 
   * and returns it in milliseconds.
   * @param param0 time the countdown is done against. This is the time the user inputs.
   */
  private calculateTimeDifference({hours, minutes, seconds}) {

    const target = moment({hours,minutes,seconds});
    const now = moment();

    if(target.diff(now) < 0){ // Adds 1 day if target time is less than current time, 
      target.add(1, 'days');  // this is important for cases when counting one day to the next 
    }                         // e.g  23:55 to  00:05
    
    return target.diff(now);
  }

  /**
   * It takes time difference in milliseconds and returns an object representing 
   * this difference in a HH mm ss format.
   * @param timeDiff difference between target time and current time in milliseconds
   */
  private formatTime(timeDiff: number) {
    const hours = moment.duration(timeDiff, 'milliseconds').hours();
    const minutes = moment.duration(timeDiff, 'milliseconds').minutes();
    const seconds = moment.duration(timeDiff, 'milliseconds').seconds();
    return { hours, minutes, seconds }
  }

  /**
   * Starts the countdown process
   * @param targetTime time the countdown is done against. This is the time the user inputs.
   */
  start(targetTime: { hours: number, minutes: number, seconds: number }) {

    this.interval = setInterval(() => {

      const timeDiff = this.calculateTimeDifference(targetTime);

      this.counter.next(this.formatTime(timeDiff));

    }, 1000);

    
  }
  /**
   * Stops the countdown process
   */
  stop() {
    if (this.interval) clearInterval(this.interval);
  }

}
