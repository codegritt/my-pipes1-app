import{Pipe} from '@angular/core'
import { PipeTransform } from '@angular/core'


@Pipe({
    name:'append'
})

export class AppendPipe implements PipeTransform{
    transform(value,appendText) {
        return value + appendText;
        
    }
}