import { 
  Component, 
  EventEmitter, 
  Output, 
  HostListener, 
  OnInit,
 } from '@angular/core';

import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[InputService]
})
export class InputComponent implements OnInit{

  @Output() onCount = new EventEmitter<Object>();
   

  numbers = [1,2,3,4,5,6,7,8,9];
  input = [];
  isValid = true;
  gridRowHeight = 80;
  constructor(private inputService: InputService) { 
    
  }

  ngOnInit(){
    this.onViewPortResize();
  }

  /**
   * Key event handler. it pushes new digit to the array.
   * @param num value of the key
   */
  onKeyPressed(num){
    if(this.input.length >= 6) return; //makes sure no more than 6 digits are pushed to the array
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
    this.isValid = this.inputService.validateInput(targetTime);
  
    //if the input is valid proceeds to emit an 
    //event that will start the count down proccess
    if(this.isValid){ 
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

  /**
   * It listens to changes in the vieport height. 
   * It adjust the grid's rowHeight property for mobile in landscape mode
   * @param event 
   */
  @HostListener('window:resize', ['$event']) 
  onViewPortResize(event?){
    const deviceHeight = window.innerHeight;
    deviceHeight <= 450 ? this.gridRowHeight = 50 : this.gridRowHeight = 80;
  }

  closePopup(){
    this.isValid = true;
  }
  
}
