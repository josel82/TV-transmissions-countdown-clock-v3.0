export class InputService {

  /**
   * Public method for validating the time input
   * @param input Array of numbers representing time input 
   */
  validateInput(targetTime){
    return this.isInputValid(targetTime);
  }

  /**
   * Validates the time object
   * @param param0 time object. contains hours, minutes , seconds properties of type number
   */
  private isInputValid({ hour, minute, second }){
    return second < 60 && minute < 60 && hour < 24;
  }

  
}
