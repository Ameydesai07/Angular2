/**
 * Created by lt-117 on 21/6/17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'truncate'})

export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string{
    return value.substring(0, limit) + "...";
  }
}
