import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'computeDigit',
    pure: false // so it runs everytime a change is detected
})
export class ComputeDigitPipe implements PipeTransform { 

    /**
     * Returns the correspondet value to a determined digit
     * @param value input array. 
     * @param position  position of the digit at which the pipe is placed
     */
    transform(value:number[], position:number){        
        return value[value.length - position] || 0;
    }
}