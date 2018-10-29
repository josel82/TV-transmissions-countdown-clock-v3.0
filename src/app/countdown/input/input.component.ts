import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[InputService]
})
export class InputComponent implements OnInit {

  @Output() onCount = new EventEmitter<Object>();

  private numbers = [1,2,3,4,5,6,7,8,9];
  private input = [];
  private invalid = false;

  constructor(private inputService: InputService) { }

  ngOnInit() {
  }

  onKeyPressed(num){
    this.input.push(num);
  }

  onDelete(){
    this.input.pop();
  }

  onPlayBtnClicked(){
    const targetTime = this.parseTime(this.input);
    const isValid = this.inputService.validateInput(targetTime);
    this.invalid = !isValid;
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

    const second =  parseInt([revInput[1],revInput[0]].join('')) || 0;
    const minute =  parseInt([revInput[3],revInput[2]].join('')) || 0;
    const hour = parseInt([revInput[5],revInput[4]].join('')) || 0;
    return { hour, minute, second };
  }

}
