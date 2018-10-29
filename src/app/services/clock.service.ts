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
  private calculateTimeDifference({hours: hour, minutes: minute, seconds: second}) {

    const target = moment({hour,minute,second});
    const now = moment();

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
