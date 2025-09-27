import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe',
})
export class StringPipePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return String(value);
  }
}
