import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDigit',
    pure: false // so it runs everytime a change is detected
})
export class FormatDigitPipe implements PipeTransform {

    /**
     * it prepends a '0' to values < 10 
     * @param value 
     */
    transform(value:number){  
        return value < 10 ? `0${value}`: value;
    }
}