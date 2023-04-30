import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value: any, country: any): any {
    let result = ``;
    if (country == "india") {
      result = `+91-${value}`;
    } else if (country == "usa") {
      result = `+01-${value}`;
    } else {
      result = value;
    }

    return result;
  }

}
