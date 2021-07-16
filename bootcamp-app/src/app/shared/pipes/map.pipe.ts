import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map',
})
export class MapPipe implements PipeTransform {
  public transform(
    value: any,
    mapFunc: (value: any, ...args: any[]) => any,
    ...args: any[]
  ): any {
    return mapFunc(value, ...args);
  }
}
