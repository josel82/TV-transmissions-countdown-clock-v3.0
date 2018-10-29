import { Component, EventEmitter, Output } from '@angular/core';

import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[InputService]
})
export class InputComponent {

  @Output() onCount = new EventEmitter<Object>();

  private numbers = [1,2,3,4,5,6,7,8,9];
  private input = [];
  private invalid = false;

  constructor(private inputService: InputService) { }

  /**
   * Key event handler. it pushes new digit to the array.
   * @param num value of the key
   */
  onKeyPressed(num){
    this.input.push(num);
  }

  /**
   * Delete event handler. It deletes the last digit in the array.
   */
  onDelete(){
    this.input.pop();
  }

  /**
   * Event Handler. Starts the process of counting down. 
   */
  onPlayBtnClicked(){
    //First parses input into HH mm ss format
    const targetTime = this.parseTime(this.input);
    //Then it validates input against the following 
    //constrains: Hours < 24 Minutes < 60 Seconds < 60
    const isValid = this.inputService.validateInput(targetTime);
    this.invalid = !isValid;
    //if the input is valid proceeds to emit an 
    //event that will start the count down proccess
    if(isValid){ 
      this.onCount.emit(targetTime);
    }
    
  }

  /**
   * It converts the input array into a time object {hours, minutes, seconds}
   * @param input reversed input array.
   */
  parseTime(input:number[]){
    const revInput = [...input].reverse();

    const seconds =  parseInt([revInput[1],revInput[0]].join('')) || 0;
    const minutes =  parseInt([revInput[3],revInput[2]].join('')) || 0;
    const hours = parseInt([revInput[5],revInput[4]].join('')) || 0;
    return { hours, minutes, seconds };
  }

}
