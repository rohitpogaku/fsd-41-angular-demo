import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any, gender: any): string {
    let result: string = "";
    if (gender == "M") {
      result = `Mr. ${value}`;
    } else if (gender == "F") {
      result = `Ms. ${value}`;
    } else {
      result = value;
    }

    return result;
  }

}
