import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'computeage'
})
export class ComputeagePipe implements PipeTransform {

  transform(value: any): any {
    return new Date().getFullYear() - new Date(value).getFullYear();
  }

}
