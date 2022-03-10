import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../../environments/environment";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ?? environment.DEFAULT_IMG;
  }

}
