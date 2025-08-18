import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimmer',
  standalone: true
})
export class TrimmerPipe implements PipeTransform {

  transform(value: string): unknown {
    if (value.length > 60) {
      return value.slice(0, 60) + "..."
    }
    return value
  }

}
