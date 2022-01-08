import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
  pure:false
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.join();
  }

}
